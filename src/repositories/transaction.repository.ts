import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TransactionEntity } from "../share/entities/transaction.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class TransactionRepository extends BaseRepository<TransactionEntity>{
    constructor(
        @InjectRepository(TransactionEntity)
        private readonly repos: Repository<TransactionEntity>
    ) {
        super(repos);
    }
}