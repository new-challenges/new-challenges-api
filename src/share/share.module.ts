import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "../controllers/auth.controller";
import { LevelController } from "../controllers/level.controller";
import { JwtStrategy } from "../jwt/strategies/jwt.strategy";
import { LevelRepository } from "../repositories/level.repository";
import { AuthService } from "../services/auth.service";
import { LevelService } from "../services/level.service";
import { LevelEntity } from "./entities/level.entity";

const repositories = [
  LevelRepository,
];

const services = [
  LevelService,
  AuthService,
];

const controllers= [
  AuthController,
  LevelController
];

const entities = [
  LevelEntity
];


@Module({
  imports: [
    
    TypeOrmModule.forFeature([...entities])
  ],
  controllers: [...controllers],
  providers: [...services, ...repositories],
  exports: [],
})
export class SharedModule { }