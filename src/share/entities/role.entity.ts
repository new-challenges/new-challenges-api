import { Column, Entity } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKStringEnity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.ROLE)
export class RoleEntity extends PKStringEnity{
    @Column({name: 'name', length: 255, type:'varchar'})
    name: string;

    @Column({name: 'description', length: 255, type:'varchar', nullable: true})
    description: string;
}