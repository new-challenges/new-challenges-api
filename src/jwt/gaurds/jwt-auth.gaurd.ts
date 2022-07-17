import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { APP_CONFIG } from "../../share/services/configuration.service";

@Injectable()
export class JwtAuthGuard extends AuthGuard(APP_CONFIG.APPLICATION.JWT.STRATEGY) {}
