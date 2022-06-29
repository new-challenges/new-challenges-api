import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationService } from './share/services/configuration.service';
import { SharedModule } from './share/share.module';

@Module({
  imports: [
    SharedModule,
    TypeOrmModule.forRoot((new ConfigurationService()).typeOrmConfig())
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
  exports: []
})
export class AppModule { }
