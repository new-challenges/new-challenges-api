import { Column, Entity } from "typeorm";
import {ENTITY_CONTANSTS} from '../../share/constants/entity.const';
import { AutoIncrementEntity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.LEVEL)
export class LevelEntity extends AutoIncrementEntity {
    @Column({name: '', length: 255, type:'varchar', nullable: false})
    name: string;
}