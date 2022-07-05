import { Body, Controller, Injectable, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SignInRequest } from "../dtos/signin/requests/signin.request";
import { AuthService } from "../services/auth.service";
import { CONTROLLER_CONSTANTS } from "../share/constants/api.const";

@Controller(CONTROLLER_CONSTANTS.AUTH.NAME)
@ApiTags(CONTROLLER_CONSTANTS.AUTH.API_TAG)
export class AuthController{
    constructor(private authService: AuthService){

    }

    @Post('/sign-in')
    async signIn(@Body() req: SignInRequest){
        return await this.authService.signIn(req);
    }    
}