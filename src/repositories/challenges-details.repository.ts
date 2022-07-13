import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ChallengesDetailsEntity } from "../share/entities/challenges-details.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class ChallengesDetailsRepository extends BaseRepository<ChallengesDetailsEntity>{
    constructor(
        @InjectRepository(ChallengesDetailsEntity)
        private readonly repos: Repository<ChallengesDetailsEntity>
    ) {
        super(repos);
    }
}