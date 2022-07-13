import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TokenPuzzlePiecesEntity } from "../share/entities/token-puzzle-pieces.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class TokenPuzzlePiecesRepository extends BaseRepository<TokenPuzzlePiecesEntity>{
    constructor(
        @InjectRepository(TokenPuzzlePiecesEntity)
        private readonly repos: Repository<TokenPuzzlePiecesEntity>
    ) {
        super(repos);
    }
}