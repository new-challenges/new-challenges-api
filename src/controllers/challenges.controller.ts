import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateChallengesRequest } from "../dtos/challenges/requests/create-challenges.request";
import { ChallengesService } from "../services/challenges.service";
import { CONTROLLER_CONSTANTS } from "../share/constants/api.const";

@Controller(CONTROLLER_CONSTANTS.CHALLENGES.NAME)
@ApiTags(CONTROLLER_CONSTANTS.CHALLENGES.API_TAG)
export class ChallengesController{
    constructor(
        private challengesService: ChallengesService
    ){}

    @Post()
    async createChallenges(req: CreateChallengesRequest){
        return await this.challengesService.createChallenges(req);
    }
}