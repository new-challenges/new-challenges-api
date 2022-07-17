import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Like } from "typeorm";
import { CreateDictionaryRequest } from "../dtos/dictionary/requests/create-dictionary.request";
import { PagingDictionaryRequest } from "../dtos/dictionary/requests/paging-dictionary.request";
import { UpdateDictionaryRequest } from "../dtos/dictionary/requests/update-dictionary.request";
import { AuthUserInterceptor } from "../interceptors/auth-user-interceptor.service";
import { Roles } from "../jwt/decorators/role.decorator";
import { JwtAuthGuard } from "../jwt/gaurds/jwt-auth.gaurd";
import { RoleGuard } from "../jwt/gaurds/role.guard";
import { DictionaryService } from "../services/dictionary.service";
import { CONTROLLER_CONSTANTS, METHODS_CONTSTANSTS } from '../share/constants/api.const';
import { RoleEnum } from "../share/enums/role.enum";

@Controller(CONTROLLER_CONSTANTS.DICTIONARY.NAME)
@ApiTags(CONTROLLER_CONSTANTS.DICTIONARY.API_TAG)
export class DictionaryController {
    constructor(
        private dictionaryService: DictionaryService
    ) { }

    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Customer, RoleEnum.Supper_Admin) 
    @ApiOperation({ summary: 'Get all data' })
    @UseInterceptors(AuthUserInterceptor)
    async getAll() {
        return await this.dictionaryService.getAll();
    }

    @Post(METHODS_CONTSTANSTS.PAGING)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Customer, RoleEnum.Supper_Admin) 
    @ApiOperation({ summary: 'Get data pagination' })
    @UseInterceptors(AuthUserInterceptor)
    async getPaging(@Body() req: PagingDictionaryRequest) {
        let options = { ...req };
        if (req.name) {
            options['where'] = { name: Like(`%${req.name.toLowerCase()}%`) };
        }
        return await this.dictionaryService.getPaging(options);
    }

    @Get(METHODS_CONTSTANSTS.GET_BY_ID)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Customer, RoleEnum.Supper_Admin) 
    @ApiOperation({ summary: 'Get data by id(details)' })
    @UseInterceptors(AuthUserInterceptor)
    async getById(@Param('id') id: number) {
        return await this.dictionaryService.getById(id);
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Create dictionary' })
    @UseInterceptors(AuthUserInterceptor)
    async create(@Body() req: CreateDictionaryRequest) {
        return await this.dictionaryService.upsertData(req);
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Update dictionary' })
    @UseInterceptors(AuthUserInterceptor)
    async upadate(@Body() req: UpdateDictionaryRequest) {
        return await this.dictionaryService.upsertData(req);
    }

    @Delete(METHODS_CONTSTANSTS.DELETE)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Delete dictionary' })
    @UseInterceptors(AuthUserInterceptor)
    async delete(@Param('id') id: number) {
        return await this.dictionaryService.deleteData(id);
    }
}