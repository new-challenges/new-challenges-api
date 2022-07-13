import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TokenEntity } from "../share/entities/token.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class TokenRepository extends BaseRepository<TokenEntity>{
    constructor(
        @InjectRepository(TokenEntity)
        private readonly repos: Repository<TokenEntity>
    ) {
        super(repos);
    }
}