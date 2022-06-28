import { Entity } from "typeorm";
import { AutoIncrementEntity } from "./base.entity";
import {ENTITY_CONTANSTS} from '../../share/constants/entity.const';

@Entity(ENTITY_CONTANSTS.LEVEL)
export class LevelEntity extends AutoIncrementEntity {
    name: string;
}