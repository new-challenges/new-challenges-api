import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { IsNull, Like, Not } from "typeorm";
import { CreateLevelRequest } from "../dtos/level/requests/create-level.request";
import { PagingLevelRequest } from "../dtos/level/requests/paging-level.request";
import { UpdateLevelRequest } from "../dtos/level/requests/update-level.request";
import { AuthUserInterceptor } from "../interceptors/auth-user-interceptor.service";
import { Roles } from "../jwt/decorators/role.decorator";
import { JwtAuthGuard } from "../jwt/gaurds/jwt-auth.gaurd";
import { RoleGuard } from "../jwt/gaurds/role.guard";
import { LevelService } from "../services/level.service";
import { CONTROLLER_CONSTANTS, METHODS_CONTSTANSTS } from '../share/constants/api.const';
import { RoleEnum } from "../share/enums/role.enum";

@Controller(CONTROLLER_CONSTANTS.LEVEL.NAME)
@ApiTags(CONTROLLER_CONSTANTS.LEVEL.API_TAG)
export class LevelController {
    constructor(
        private levelService: LevelService
    ) { }

    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Customer, RoleEnum.Supper_Admin) 
    @ApiOperation({ summary: 'Get all data' })
    @UseInterceptors(AuthUserInterceptor)
    async getAll() {
        return await this.levelService.getAll();
    }

    @Post(METHODS_CONTSTANSTS.PAGING)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Customer, RoleEnum.Supper_Admin) 
    @ApiOperation({ summary: 'Get data pagination' })
    @UseInterceptors(AuthUserInterceptor)
    async getPaging(@Body() req: PagingLevelRequest) {
        let options = { ...req };
        if (req.name) {
            options['where'] = { name: Like(`%${req.name.toLowerCase()}%`) };
        }
        return await this.levelService.getPaging(options);
    }

    @Get(METHODS_CONTSTANSTS.GET_BY_ID)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Customer, RoleEnum.Supper_Admin) 
    @ApiOperation({ summary: 'Get data by id(details)' })
    @UseInterceptors(AuthUserInterceptor)
    async getById(@Param('id') id: number) {
        return await this.levelService.getById(id);
    }

    @Post()
    @ApiBearerAuth()
    @UseInterceptors(AuthUserInterceptor)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Create level' })    
    async create(@Body() req: CreateLevelRequest) {
        return await this.levelService.create(req);
    }

    @Put()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Update level' })
    @UseInterceptors(AuthUserInterceptor)
    async upadate(@Body() req: UpdateLevelRequest) {
        return await this.levelService.update(req);
    }

    @Delete(METHODS_CONTSTANSTS.DELETE)
    @ApiBearerAuth()
    @UseInterceptors(AuthUserInterceptor)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Delete level' })    
    async delete(@Param('id') id: number) {
        return await this.levelService.delete(id);
    }
}