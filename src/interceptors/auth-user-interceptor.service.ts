import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApplicationContextService } from '../share/services/application-context.service';
@Injectable()
export class AuthUserInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        ApplicationContextService.setAuthUser(user);
        return next.handle();
    }
}
