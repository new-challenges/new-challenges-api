import { Column, Entity } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKAutoIncrementEntity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.QUESTION)
export class QuestionEntity extends PKAutoIncrementEntity {

    @Column({ name: 'name', type: 'varchar', length: 255 })
    name: string;

    @Column({ name: 'answer', type: 'varchar', length: 255, nullable: true })
    answer: string;

    @Column({ name: 'point', nullable: true })
    point: number;
}