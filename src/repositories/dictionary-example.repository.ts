import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DictionaryExampleEntity } from "../share/entities/dictionary-example.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class DictionaryExampleRepository extends BaseRepository<DictionaryExampleEntity>{
    constructor(
        @InjectRepository(DictionaryExampleEntity)
        private readonly repos: Repository<DictionaryExampleEntity>
    ) {
        super(repos);
    }
}