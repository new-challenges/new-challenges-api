import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserWalletRefEntity } from "../share/entities/user-wallet-ref.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class UserWalletRefRepository extends BaseRepository<UserWalletRefEntity>{
    constructor(
        @InjectRepository(UserWalletRefEntity)
        private readonly repos: Repository<UserWalletRefEntity>
    ) {
        super(repos);
    }
}