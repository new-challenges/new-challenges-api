import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LevelEntity } from "./entities/level.entity";


const ENTITIES = [LevelEntity];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([...ENTITIES])],
  providers: [],
  exports: [],
})
export class SharedModule { }