import { Injectable } from "@nestjs/common";
import { request } from "http";
import { LevelResponse } from "../dtos/level/responses/level.response";
import { ResponseDto } from "../dtos/response.dto";
import { CreateUserRequest } from "../dtos/user/requests/create-user.request";
import { UpdateStatusUserRequest } from "../dtos/user/requests/update-status-user.request";
import { UpdateUserRequest } from "../dtos/user/requests/update-user.request";
import { UserResponse } from "../dtos/user/responses/user.response";
import { AuthenticationRepository } from "../repositories/authentication.repository";
import { UserRepository } from "../repositories/user.repository";
import { DEVICE_CONSTANTS, USER_STATUS_CONSTANTS } from "../share/constants/api.const";
import { RESPONSE_CODE_CONTANTS } from "../share/constants/response-code.const";
import { AuthenticationEntity } from "../share/entities/authentication.entity";
import { UserEntity } from "../share/entities/user.entity";
import { RoleEnum } from "../share/enums/role.enum";
import { BcryptService } from "../share/services/bcrypt.service";
import autoMapper from "../share/services/mapper.service";
import { BaseService } from "./base/base.service";

@Injectable()
export class UserService extends BaseService<UserResponse, UserEntity>{

    constructor(
        private repos: UserRepository,
        private authRepos: AuthenticationRepository,
        private bcryptService: BcryptService,
    ) {
        super(repos, LevelResponse);
    }

    async updateStatus(req: UpdateStatusUserRequest) {
        const find = await this.repos.getOne({
            where: {
                id: req.id
            }
        });
        if (find) {
            find.status = req.status;
            await this.update(find);
            return new ResponseDto(
                RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
                RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
                [],
            );
        } else {
            return new ResponseDto(
                RESPONSE_CODE_CONTANTS.E004.CODE,
                RESPONSE_CODE_CONTANTS.E004.MESSAGES,
                [],
                true
            );
        }
    }

    async updateInfo(req: UpdateUserRequest) {
        const find = await this.repos.getOne({
            where: {
                id: req.id
            }
        });

        if (find) {
            const entity = autoMapper(req, find);
            await this.update(entity);
            return new ResponseDto(
                RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
                RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
                [],
            );
        } else {
            return new ResponseDto(
                RESPONSE_CODE_CONTANTS.E004.CODE,
                RESPONSE_CODE_CONTANTS.E004.MESSAGES,
                [],
                true
            );
        }
    }

    async createUser(req: CreateUserRequest) {
        // Create Auth
        const authEntity = new AuthenticationEntity();
        authEntity.username = req.id;
        authEntity.password = await this.bcryptService.encrypt('1234567');
        authEntity.status = USER_STATUS_CONSTANTS.ACTIVED;
        authEntity.forgetPassword = false;
        authEntity.roleId = RoleEnum.Admin;
        authEntity.device = DEVICE_CONSTANTS.PC;
        await this.authRepos.create(authEntity);

        // Create User
        const userEntity = autoMapper(req, new UserEntity());
        userEntity.authenticationId = authEntity.id;
        await this.create(userEntity);
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            [],
        );
    }
}