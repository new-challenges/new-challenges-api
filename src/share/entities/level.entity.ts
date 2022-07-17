import { Column, Entity } from "typeorm";
import {ENTITY_CONTANSTS} from '../../share/constants/entity.const';
import { PKAutoIncrementEntity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.LEVEL)
export class LevelEntity extends PKAutoIncrementEntity {
    
    @Column({name: 'name', length: 255, type:'varchar'})
    name: string;

    @Column({name: 'quantity'})
    quantity: number;

    @Column({name: 'passed'})
    passed: number;

    @Column({name: 'practice_time'})
    practiceTime: number;

    @Column({name: 'description', length: 1500, type:'varchar', nullable: true})
    description: string;
}