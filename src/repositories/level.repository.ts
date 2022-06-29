import { BaseRepository } from "./base/base.repository";
import {LevelEntity} from '../share/entities/level.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LevelRepository extends BaseRepository<LevelEntity>{
    constructor(
        @InjectRepository(LevelEntity)
        private readonly repos: Repository<LevelEntity>
    ){
        super(repos);
    }
}