import { Injectable } from "@nestjs/common";
import { JwtService, JwtSignOptions } from "@nestjs/jwt";
import { ResponseDto } from "../dtos/response.dto";
import { SignInRequest } from "../dtos/signin/requests/signin.request";
import { SignUpRequest } from "../dtos/signup/requests/signup.request";
import { OTPRepository } from "../repositories/opt.repository";
import { RESPONSE_CODE_CONTANTS } from "../share/constants/response-code.const";
import { OTPEnity } from "../share/entities/opt.entity";
import { BcryptService } from "../share/services/bcrypt.service";
import { APP_CONFIG } from "../share/services/configuration.service";
import moment from 'moment';
import { AuthenticationRepository } from "../repositories/authentication.repository";
import { ValidationOTPRequest } from "../dtos/auth/requests/validation-opt.request";
import { DEVICE_CONSTANTS, OPT_STATUS_CONSTANTS, USER_STATUS_CONSTANTS } from "../share/constants/api.const";
import { AuthenticationEntity } from "../share/entities/authentication.entity";
import { RoleEnum } from "../share/enums/role.enum";
import { CreateAuthRequest } from "../dtos/auth/requests/create-auth.request";
import { TokenService } from "../share/services/token.service";
import e from "express";
import { In } from "typeorm";
import { UserContext } from "../share/services/application-context.service";
import { NodeMailerService } from "../share/services/node-mailer.service";
import { CommonService } from "../share/services/common.service";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private otpRepos: OTPRepository,
        private bcryptService: BcryptService,
        private authRepos: AuthenticationRepository,
        private tokenService: TokenService,
        private nodeMailerService: NodeMailerService,
        private commonService: CommonService
    ) {
        setTimeout(async () => {
            await this.createSupperAdmin();
        }, 100);
    }

    async customerSignIn(req: SignInRequest) {
        const encryptPass = await this.bcryptService.encrypt(req.password);
        const find = await this.authRepos.getOne({
            where: {
                username: req.username,
                password: encryptPass,
                status: USER_STATUS_CONSTANTS.ACTIVED,
                roleId: RoleEnum.Customer
            }
        });
        if (find) {
            const isMatch = await this.bcryptService.validationHash(find.password, req.password);
            if (isMatch) {
                const userContext = new UserContext(req.username, [find.roleId]);
                const token = await this.tokenService.generateToken(userContext)
                return new ResponseDto(
                    RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
                    RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
                    token,
                );
            } else {
                return new ResponseDto(
                    RESPONSE_CODE_CONTANTS.E005.CODE,
                    RESPONSE_CODE_CONTANTS.E005.MESSAGES,
                    [],
                    true
                );
            }
        } else {
            return new ResponseDto(
                RESPONSE_CODE_CONTANTS.E004.CODE,
                RESPONSE_CODE_CONTANTS.E004.MESSAGES,
                [],
                true
            );
        }
    }

    async adminSignIn(req: SignInRequest) {
        const encryptPass = await this.bcryptService.encrypt(req.password);
        const find = await this.authRepos.getOne({
            where: {
                username: req.username,
                status: USER_STATUS_CONSTANTS.ACTIVED,
                roleId: In[RoleEnum.Admin, RoleEnum.Supper_Admin]
            }
        });
        if (find) {
            const isMatch = await this.bcryptService.validationHash(find.password, req.password);
            if (isMatch) {
                const userContext = new UserContext(req.username, [find.roleId]);
                const token = await this.tokenService.generateToken(userContext)
                return new ResponseDto(
                    RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
                    RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
                    token,
                );
            } else {
                return new ResponseDto(
                    RESPONSE_CODE_CONTANTS.E005.CODE,
                    RESPONSE_CODE_CONTANTS.E005.MESSAGES,
                    [],
                    true
                );
            }

        } else {
            return new ResponseDto(
                RESPONSE_CODE_CONTANTS.E004.CODE,
                RESPONSE_CODE_CONTANTS.E004.MESSAGES,
                [],
                true
            );
        }
    }

    /**
     * @param req 
     * @returns 
     */
    async sendOTP(req: SignUpRequest) {
        const reponse = {};
        const opt = await this.otpRepos.getOne({
            where: { id: req.username }
        });
        if (opt) {
            return new ResponseDto(
                RESPONSE_CODE_CONTANTS.E001.CODE,
                RESPONSE_CODE_CONTANTS.E001.MESSAGES,
                [],
                true
            );
        } else {
            const otpEnity = new OTPEnity();
            const otp = this.commonService.generateOTP();

            // Send mail OTP
            await this.nodeMailerService.sendEmail(req.username, otp)

            otpEnity.id = req.username;
            otpEnity.opt = await this.bcryptService.encrypt(otp);
            otpEnity.expiredDate = moment(new Date()).add(30, 'm').toDate();
            await this.otpRepos.create(otpEnity);

            return new ResponseDto(
                RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
                RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
                [],
            );
        }
    }

    async validationOTP(req: ValidationOTPRequest) {
        const finData = await this.otpRepos.getOne({
            where: {
                id: req.email,
                status: OPT_STATUS_CONSTANTS.REQUEST_OTP
            }
        });
        const isValid = (finData) ? true : false;
        if (finData) {
            const isMatch = await this.bcryptService.validationHash(finData.opt, req.otp);
            if (isMatch) {
                // Update status opt
                finData.status = OPT_STATUS_CONSTANTS.VALID_OTP;
                await this.otpRepos.update(finData);

                return new ResponseDto(
                    RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
                    RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
                    { email: req.email, isValid },
                );
            } else {
                return new ResponseDto(
                    RESPONSE_CODE_CONTANTS.E006.CODE,
                    RESPONSE_CODE_CONTANTS.E006.MESSAGES,
                    [],
                    true
                );
            }
        }
    }

    async createCustomer(req: CreateAuthRequest) {
        const find = this.otpRepos.getOne({
            where: {
                id: req.username,
                status: OPT_STATUS_CONSTANTS.VALID_OTP
            }
        });
        if (find) {
            return await this.create(req, RoleEnum.Customer, DEVICE_CONSTANTS.MOBILE);
        } else {
            return new ResponseDto(
                RESPONSE_CODE_CONTANTS.E003.CODE,
                RESPONSE_CODE_CONTANTS.E003.MESSAGES,
                [],
                true
            );
        }
    }

    async createAdmin(req: CreateAuthRequest) {
        return await this.create(req, RoleEnum.Admin, DEVICE_CONSTANTS.PC);
    }

    async createSupperAdmin() {
        const find = await this.authRepos.getOne({
            where: { username: APP_CONFIG.SUPPER_ADMIN.USERNAME }
        });
        if (!find) {
            const req = new CreateAuthRequest();
            req.username = APP_CONFIG.SUPPER_ADMIN.USERNAME;
            req.password = APP_CONFIG.SUPPER_ADMIN.PASSWORD;
            req.passwordConfirm = APP_CONFIG.SUPPER_ADMIN.PASSWORD;
            await this.create(req, RoleEnum.Supper_Admin, DEVICE_CONSTANTS.PC);
        }
    }

    async create(req: any, role: string, device: string) {
        if (req.password !== req.passwordConfirm) {
            return new ResponseDto(
                RESPONSE_CODE_CONTANTS.E002.CODE,
                RESPONSE_CODE_CONTANTS.E002.MESSAGES,
                [],
                true
            );
        }
        const authEntity = new AuthenticationEntity();
        authEntity.username = req.username;
        authEntity.password = await this.bcryptService.encrypt(req.password);
        authEntity.status = USER_STATUS_CONSTANTS.ACTIVED;
        authEntity.forgetPassword = false;
        authEntity.roleId = role;
        authEntity.device = device;
        await this.authRepos.create(authEntity);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            [],
        );
    }
}