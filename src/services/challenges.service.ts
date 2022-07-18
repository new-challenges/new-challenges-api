import { Injectable } from "@nestjs/common";
import { CreateChallengesRequest } from "../dtos/challenges/requests/create-challenges.request";
import { ChallengesReponse } from "../dtos/challenges/responses/challenges.reponse";
import { ResponseDto } from "../dtos/response.dto";
import { ChallengesRepository } from "../repositories/challenges.repository";
import { CHALLENGES_TYPE } from "../share/constants/app.const";
import { RESPONSE_CODE_CONTANTS } from "../share/constants/response-code.const";
import { ChallengesEntity } from "../share/entities/challenges.entity";
import { BaseService } from "./base/base.service";

@Injectable()
export class ChallengesService extends BaseService<ChallengesReponse, ChallengesEntity>{
    constructor(
        private challengesRepos: ChallengesRepository
    ){
        super(challengesRepos, ChallengesReponse);
    }

    async createChallenges(req: CreateChallengesRequest){
        if(req.challengesType === CHALLENGES_TYPE.DICTIONARY){

        }else if(req.challengesType === CHALLENGES_TYPE.GRAMMER){

        }
        return new ResponseDto(
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.CODE,
            RESPONSE_CODE_CONTANTS.SUCCESSFULLY.MESSAGES,
            []
        );
    }

    genDictionary(){

    }

    genGrammar(){

    }
}