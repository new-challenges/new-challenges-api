import { Column, Entity } from "typeorm";
import {ENTITY_CONTANSTS} from '../../share/constants/entity.const';
import { PKAutoIncrementEntity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.LEVEL)
export class LevelEntity extends PKAutoIncrementEntity {
    
    @Column({name: 'name', length: 255, type:'varchar'})
    name: string;

    @Column({name: 'quanlity'})
    quanlity: number;

    @Column({name: 'description', length: 1500, type:'varchar'})
    description: string;
}