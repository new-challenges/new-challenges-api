import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleGuard } from './jwt/gaurds/role.guard';
import { JwtStrategy } from './jwt/strategies/jwt.strategy';
import { contextMiddleware } from './middlewares/context.middleware';
import { APP_CONFIG, ConfigurationService } from './share/services/configuration.service';
import { SharedModule } from './share/share.module';

@Global()
@Module({
  imports: [
    SharedModule,
    TypeOrmModule.forRoot((new ConfigurationService()).typeOrmConfig()),
    PassportModule.register({
      defaultStrategy: APP_CONFIG.APPLICATION.JWT.STRATEGY,
      session: true
    }),
    JwtModule.register({
      secret: APP_CONFIG.APPLICATION.JWT.SECRET_KEY,
      signOptions: {expiresIn: APP_CONFIG.APPLICATION.JWT.EXPIRES_IN}
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtService,
    JwtStrategy,
  ],
  exports: [JwtService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(contextMiddleware).forRoutes('*');
  }
}

