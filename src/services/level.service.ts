import { Injectable } from "@nestjs/common";
import { LevelResponse } from "../dtos/level/responses/level.response";
import { LevelRepository } from '../repositories/level.repository';
import { LevelEntity } from '../share/entities/level.entity';
import { BaseService } from "./base/base.service";

@Injectable()
export class LevelService extends BaseService<LevelResponse, LevelEntity>{

    constructor(private repos: LevelRepository) {
        super(repos, LevelResponse);
    }
}