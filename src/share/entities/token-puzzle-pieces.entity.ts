import { Column, Entity } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKAutoIncrementEntity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.TOKEN_PUZZLE_PIECES)
export class TokenPuzzlePiecesEntity extends PKAutoIncrementEntity {
    @Column({ name: "tokenId", type: 'varchar', length: 255})
    tokenId: string;

    @Column({ name: "images", type: 'varchar', length: 1000, nullable: true})
    images: string;
}