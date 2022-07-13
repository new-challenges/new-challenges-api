import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RoleEntity } from "../share/entities/role.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class RoleRepository extends BaseRepository<RoleEntity>{
    constructor(
        @InjectRepository(RoleEntity)
        private readonly repos: Repository<RoleEntity>
    ) {
        super(repos);
    }
}