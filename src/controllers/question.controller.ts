import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Like } from "typeorm";
import { UpdateLevelRequest } from "../dtos/level/requests/update-level.request";
import { CreateQuestionRequest } from "../dtos/question/requests/create-question.request";
import { PagingQuestionRequest } from "../dtos/question/requests/paging-question.request";
import { UpdateQuestionRequest } from "../dtos/question/requests/update-question.request";
import { AuthUserInterceptor } from "../interceptors/auth-user-interceptor.service";
import { Roles } from "../jwt/decorators/role.decorator";
import { JwtAuthGuard } from "../jwt/gaurds/jwt-auth.gaurd";
import { RoleGuard } from "../jwt/gaurds/role.guard";
import { QuestionService } from "../services/question.service";
import { CONTROLLER_CONSTANTS, METHODS_CONTSTANSTS } from "../share/constants/api.const";
import { RoleEnum } from "../share/enums/role.enum";

@Controller(CONTROLLER_CONSTANTS.QUESTION.NAME)
@ApiTags(CONTROLLER_CONSTANTS.QUESTION.API_TAG)
export class QuestionController{
    constructor(
        private questionService: QuestionService
    ){}

    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Customer, RoleEnum.Supper_Admin) 
    @ApiOperation({ summary: 'Get all data' })
    @UseInterceptors(AuthUserInterceptor)
    async getAll() {
        return await this.questionService.getAll();
    }

    @Post(METHODS_CONTSTANSTS.PAGING)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Customer, RoleEnum.Supper_Admin) 
    @ApiOperation({ summary: 'Get data pagination' })
    @UseInterceptors(AuthUserInterceptor)
    async getPaging(@Body() req: PagingQuestionRequest) {
        let options = { ...req };
        if (req.name) {
            options['where'] = { name: Like(`%${req.name.toLowerCase()}%`) };
        }
        return await this.questionService.getPaging(options);
    }

    @Get(METHODS_CONTSTANSTS.GET_BY_ID)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Customer, RoleEnum.Supper_Admin) 
    @ApiOperation({ summary: 'Get data by id(details)' })
    @UseInterceptors(AuthUserInterceptor)
    async getById(@Param('id') id: number) {
        return await this.questionService.getById(id);
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Create question' })
    @UseInterceptors(AuthUserInterceptor)
    async create(@Body() req: CreateQuestionRequest) {
        return await this.questionService.create(req);
    }

    @Put()
    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Update question' })
    @UseInterceptors(AuthUserInterceptor)
    async upadate(@Body() req: UpdateQuestionRequest) {
        return await this.questionService.update(req);
    }

    @Delete(METHODS_CONTSTANSTS.DELETE)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Supper_Admin, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Delete question' })
    @UseInterceptors(AuthUserInterceptor)
    async delete(@Param('id') id: number) {
        return await this.questionService.delete(id);
    }
}