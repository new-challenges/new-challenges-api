import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Like } from "typeorm";
import { CreateUserRequest } from "../dtos/user/requests/create-user.request";
import { PagingUserRequest } from "../dtos/user/requests/paging-user.request";
import { UpdateUserRequest } from "../dtos/user/requests/update-user.request";
import { Roles } from "../jwt/decorators/role.decorator";
import { JwtAuthGuard } from "../jwt/gaurds/jwt-auth.gaurd";
import { RoleGuard } from "../jwt/gaurds/role.guard";
import { UserService } from "../services/user.service";
import { CONTROLLER_CONSTANTS, METHODS_CONTSTANSTS } from "../share/constants/api.const";
import { RoleEnum } from "../share/enums/role.enum";

@Controller(CONTROLLER_CONSTANTS.USER.NAME)
@ApiTags(CONTROLLER_CONSTANTS.USER.API_TAG)
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async getAll() {
        return await this.userService.getAll();
    }

    @Post(METHODS_CONTSTANSTS.PAGING)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Admin)
    @ApiOperation({ summary: 'Get data pagination' })
    async getPaging(@Body() req: PagingUserRequest) {
        let options = { ...req };
        if (req.name) {
            options['where'] = { name: Like(`%${req.name.toLowerCase()}%`) };
        }
        return await this.userService.getPaging(options);
    }

    @Post(METHODS_CONTSTANSTS.PAGING)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Admin, RoleEnum.Customer, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Get data by id(details)' })
    async getById(@Param('id') id: number) {
        return await this.userService.getById(id);
    }

    @Put()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Admin, RoleEnum.Customer, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Update user' })
    async upadate(@Body() req: UpdateUserRequest) {
        return await this.userService.updateInfo(req);
    }

    @Put(METHODS_CONTSTANSTS.UPDATE_STATUS)
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Admin, RoleEnum.Customer, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Update status(Active/Inactive)' })
    async upadateStatus(@Body() req: UpdateUserRequest) {
        return await this.userService.updateStatus(req);
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(RoleEnum.Admin, RoleEnum.Supper_Admin)
    @ApiOperation({ summary: 'Create User' })
    async create(@Body() req: CreateUserRequest) {
        return await this.userService.createUser(req);
    }
}