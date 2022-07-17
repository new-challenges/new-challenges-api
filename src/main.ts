import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RoleGuard } from './jwt/gaurds/role.guard';
import registerSwagger from './share/configurations/swagger.config';
import { APP_CONFIG, ConfigurationService } from './share/services/configuration.service';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  // Set Global Guards to authorize
  app.useGlobalGuards();

  // Setting app
  const prefix = APP_CONFIG.APPLICATION.API_REFIX;
  const port =  APP_CONFIG.APPLICATION.PORT;

  app.setGlobalPrefix(prefix);
  app.enableCors();

  // Swagger
  registerSwagger(app);

  await app.listen(port);
}
bootstrap();
