import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { APP_CONFIG } from "../../share/services/configuration.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: APP_CONFIG.APPLICATION.JWT.SECRET_KEY,
      // Strategy: APP_CONFIG.APPLICATION.JWT.STRATEGY,
      // passReqToCallback: true
    });
  }

  validate(payload: any) {
    if (!payload) {
      throw new UnauthorizedException();
    }    
    return payload;
  }
}