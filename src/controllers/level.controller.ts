import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateLevelRequest } from "../dtos/levels/requests/create-level.request";
import { Roles } from "../jwt/decorators/role.decorator";
import { JwtAuthGuard } from "../jwt/gaurds/jwt-auth.gaurd";
import { RoleGuard } from "../jwt/gaurds/role.guard";
import { LevelService } from "../services/level.service";
import { CONTROLLER_CONSTANTS } from '../share/constants/api.const';
import { RoleEnum } from "../share/enums/role.enum";

@Controller(CONTROLLER_CONSTANTS.LEVEL.NAME)
@ApiTags(CONTROLLER_CONSTANTS.LEVEL.API_TAG)
export class LevelController {
    constructor(
        private levelService: LevelService
    ) {

    }

    @Get()
    async getAll() {
        return await this.levelService.getAll({ name: 'ASC' });
    }

    @Post()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Admin)
    create(@Body() req: CreateLevelRequest) {
        return 'CreateLevelRequest';
    }
}