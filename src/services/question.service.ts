import { Injectable } from "@nestjs/common";
import { QuestionResponse } from "../dtos/question/responses/question.response";
import { QuestionRepository } from "../repositories/question.repository";
import { QuestionEntity } from "../share/entities/question.entity";
import { BaseService } from "./base/base.service";

@Injectable()
export class QuestionService extends BaseService<QuestionResponse, QuestionEntity> {
    constructor(
        private questionRepos: QuestionRepository
    ) {
        super(questionRepos, QuestionResponse);
    }
}