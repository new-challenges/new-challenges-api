import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigurationService} from './share/services/configuration.service';
import { SharedModule } from './share/share.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: [ `.env`]
    // }),
    SharedModule,
    TypeOrmModule.forRootAsync({
        useFactory: (configService= new ConfigurationService()) => configService.typeOrmConfig()
      })
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {}
