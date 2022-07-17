import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateAuthRequest } from "../dtos/auth/requests/create-auth.request";
import { ValidationOTPRequest } from "../dtos/auth/requests/validation-opt.request";
import { SignInRequest } from "../dtos/signin/requests/signin.request";
import { SignUpRequest } from "../dtos/signup/requests/signup.request";
import { Roles } from "../jwt/decorators/role.decorator";
import { JwtAuthGuard } from "../jwt/gaurds/jwt-auth.gaurd";
import { RoleGuard } from "../jwt/gaurds/role.guard";
import { AuthService } from "../services/auth.service";
import { CONTROLLER_CONSTANTS } from "../share/constants/api.const";
import { RoleEnum } from "../share/enums/role.enum";

@Controller(CONTROLLER_CONSTANTS.AUTH.NAME)
@ApiTags(CONTROLLER_CONSTANTS.AUTH.API_TAG)
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post(CONTROLLER_CONSTANTS.AUTH.METHODS.Admin_SIGNIN)
    @ApiOperation({ summary: 'Sign in system with Admin' })   
    async signIn(@Body() req: SignInRequest) {
        return await this.authService.adminSignIn(req);
    }

    @Post(CONTROLLER_CONSTANTS.AUTH.METHODS.CUSTOMER_SIGNIN)
    @ApiOperation({ summary: 'Sign in system with customer' })   
    async mobieSignIn(@Body() req: SignInRequest) {
        return await this.authService.customerSignIn(req);
    }

    @Post(CONTROLLER_CONSTANTS.AUTH.METHODS.SIGNUP)
    @ApiOperation({ summary: 'Send OTP to email' })
    async signUp(@Body() req: SignUpRequest) {
        return await this.authService.sendOTP(req);
    }

    @Post(CONTROLLER_CONSTANTS.AUTH.METHODS.CREATE_CUSTOMER)
    @ApiOperation({ summary: 'Create customer' })
    async createCustomer(@Body() req: CreateAuthRequest) {
        return await this.authService.createCustomer(req);
    }

    @Post(CONTROLLER_CONSTANTS.AUTH.METHODS.CREATE_ADMIN)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin) 
    @ApiOperation({ summary: 'Create admin' })   
    async createAdmin(@Body() req: CreateAuthRequest) {
        return await this.authService.createAdmin(req);
    }

    @Post(CONTROLLER_CONSTANTS.AUTH.METHODS.CONFIRM_OPT)
    @ApiOperation({ summary: 'Verify OPT code' })
    async confirmOTP(@Body() req: ValidationOTPRequest) {
        return await this.authService.validationOTP(req);
    }
}
