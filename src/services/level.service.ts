import { Repository } from "typeorm";
import { LevelResponse } from "../dtos/levels/responses/level.response";
import { BaseService } from "./base/base.service";
import { LevelEntity } from '../share/entities/level.entity';
import { LevelRepository } from '../repositories/level.repository';
import { Injectable } from "@nestjs/common";

@Injectable()
export class LevelService extends BaseService<LevelResponse, LevelEntity>{

    constructor(private repos: LevelRepository) {
        super(repos);
    }
}