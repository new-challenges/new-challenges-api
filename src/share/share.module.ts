import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LevelController } from "../controllers/level.controller";
import { LevelRepository } from "../repositories/level.repository";
import { LevelService } from "../services/level.service";
import { LevelEntity } from "./entities/level.entity";

const controllers= [LevelController];
const entities = [LevelEntity];
const providers = [
  LevelRepository,
  LevelService
];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([...entities])],
  controllers: [...controllers],
  providers: [...providers],
  exports: [],
})
export class SharedModule { }