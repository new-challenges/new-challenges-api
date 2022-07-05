import { Injectable } from "@nestjs/common";
import { JwtService, JwtSignOptions } from "@nestjs/jwt";
import { SignInRequest } from "../dtos/signin/requests/signin.request";
import { SignUpRequest } from "../dtos/signup/requests/signup.request";
import { APP_CONFIG } from "../share/services/configuration.service";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {

    }

    async signIn(req: SignInRequest) {
        const jwtOption = APP_CONFIG.APPLICATION.JWT;
        const userRequest = { username: req.username, roles:['Admin'] };
        const jwtSignOptions: JwtSignOptions = {
            // algorithm: "RS256",
            secret: jwtOption.SECRET_KEY,
            expiresIn: jwtOption.EXPIRES_IN
        };

        const access_token = await this.jwtService.sign(userRequest, jwtSignOptions);

        return {
            access_token
        };
    }

    signUp(req: SignUpRequest) {

    }

    private encryptPassword(password: string) {

    }
}