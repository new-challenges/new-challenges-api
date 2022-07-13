import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DictionaryEnity } from "../share/entities/dictionary.entity";
import { UserEntity } from "../share/entities/user.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class DictionaryRepository extends BaseRepository<DictionaryEnity>{
    constructor(
        @InjectRepository(DictionaryEnity)
        private readonly repos: Repository<DictionaryEnity>
    ) {
        super(repos);
    }
}