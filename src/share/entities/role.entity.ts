import { Column } from "typeorm";
import { PKStringEnity } from "./base/base.entity";

export class RoleEntity extends PKStringEnity{
    @Column({name: 'name', length: 255, type:'varchar'})
    name: string;

    @Column({name: 'description', length: 255, type:'varchar'})
    description: string;
}