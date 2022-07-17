import { Column, Entity, Index } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKAutoIncrementEntity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.CHALLENGES_DETAILS)
export class ChallengesDetailsEntity extends PKAutoIncrementEntity{

    @Index({unique: true})
    @Column({name: 'challenges_id'})
    challengesId: number;

    @Column({ name: 'question', type: 'varchar', length: 1000 })
    question: string;

    @Column({ name: 'answer', type: 'varchar', length: 255 })
    answer: string;

    @Column({ name: 'currect_answer', type: 'varchar', length: 255, nullable: true })
    currectAnswer: string;

    @Column({ name: 'status', type: 'varchar', length: 255 })
    status: string;
}