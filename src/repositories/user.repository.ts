import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../share/entities/user.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class UserRepository extends BaseRepository<UserEntity>{
    constructor(
        @InjectRepository(UserEntity)
        private readonly repos: Repository<UserEntity>
    ) {
        super(repos);
    }
}