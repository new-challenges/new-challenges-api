import { Column, Entity, Index } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKAutoIncrementEntity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.DICTIONARY_EXAMPLE)
export class DictionaryExampleEntity extends PKAutoIncrementEntity {
    @Column({name: 'dictionary_id'})
    @Index({unique: true})
    dictionaryId: number;

    @Column({name: 'example', type: 'varchar', length: 255})
    example: string;

    @Column({name: 'description', type: 'varchar', length: 1500})
    description: string;
}