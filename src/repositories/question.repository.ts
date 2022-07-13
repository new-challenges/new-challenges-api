import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QuestionEntity } from "../share/entities/question.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class QuestionRepository extends BaseRepository<QuestionEntity>{
    constructor(
        @InjectRepository(QuestionEntity)
        private readonly repos: Repository<QuestionEntity>
    ) {
        super(repos);
    }
}