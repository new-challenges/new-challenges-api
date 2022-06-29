import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LevelService } from "../services/level.service";
import { CONTROLLER_CONSTANTS } from '../share/constants/api.const';

@Controller(CONTROLLER_CONSTANTS.LEVEL.NAME)
@ApiTags(CONTROLLER_CONSTANTS.LEVEL.API_TAG)
export class LevelController{
    constructor(
        private levelService: LevelService
    ){

    }

    @Get()
    async getAll(){
        return await this.levelService.getAll({name: 'ASC'});
    }
}