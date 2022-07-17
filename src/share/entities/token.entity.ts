import { Column, Entity } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKStringEnity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.TOKEN)
export class TokenEntity extends PKStringEnity {

    @Column({ name: "name", type: 'varchar', length: 255})
    name: string;

    @Column({ name: "images", type: 'varchar', length: 1000, nullable: true})
    images: string;

    @Column({name: 'number_of_pieces'})
    numberOfPieces: number;

    @Column({name: 'level'})
    level: number;
}
