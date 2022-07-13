import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthenticationEntity } from "../share/entities/authentication.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class AuthenticationRepository extends BaseRepository<AuthenticationEntity>{
    constructor(
        @InjectRepository(AuthenticationEntity)
        private readonly repos: Repository<AuthenticationEntity>
    ) {
        super(repos);
    }
}