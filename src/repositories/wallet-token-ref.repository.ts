import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WalletTokenRefEntity } from "../share/entities/wallet-token-ref.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class WalletTokenRefRepository extends BaseRepository<WalletTokenRefEntity>{
    constructor(
        @InjectRepository(WalletTokenRefEntity)
        private readonly repos: Repository<WalletTokenRefEntity>
    ) {
        super(repos);
    }
}