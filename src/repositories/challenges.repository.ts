import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ChallengesEntity } from "../share/entities/challenges.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class ChallengesRepository extends BaseRepository<ChallengesEntity>{
    constructor(
        @InjectRepository(ChallengesEntity)
        private readonly repos: Repository<ChallengesEntity>
    ) {
        super(repos);
    }
}