import { Column, Entity } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKAutoIncrementEntity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.DICTIONARY)
export class DictionaryEnity extends PKAutoIncrementEntity {
    @Column({name: 'example', type: 'varchar', length: 255})
    name: string;

    @Column({name: 'type_of_word', type: 'varchar', length: 50})
    typeOfWord: string;

    @Column({name: 'meaning', type: 'varchar', length: 1000})
    meaning: string;
}