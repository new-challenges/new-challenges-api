import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OTPEnity } from "../share/entities/opt.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class OTPRepository extends BaseRepository<OTPEnity>{
    constructor(
        @InjectRepository(OTPEnity)
        private readonly repos: Repository<OTPEnity>
    ) {
        super(repos);
    }
}