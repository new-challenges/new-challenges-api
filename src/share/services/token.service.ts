import { Injectable } from "@nestjs/common";
import { JwtService, JwtSignOptions } from "@nestjs/jwt";
import { APP_CONFIG } from "./configuration.service";

@Injectable()
export class TokenService {
    constructor(
        private jwtService: JwtService,
    ){}

    async generateToken(data: any){
        const jwtOption = APP_CONFIG.APPLICATION.JWT;
        const jwtSignOptions: JwtSignOptions = {
            // algorithm: "RS256",
            secret: jwtOption.SECRET_KEY,
            expiresIn: jwtOption.EXPIRES_IN
        };

        const access_token = await this.jwtService.sign(data, jwtSignOptions);

        return {
            access_token
        };
    }
}