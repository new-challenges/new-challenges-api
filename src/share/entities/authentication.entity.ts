import { Column, Entity, Index } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKAutoIncrementEntity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.AUTHENTICATION)
export class AuthenticationEntity extends PKAutoIncrementEntity{
    @Column({name: 'username', length: 255, type:'varchar'})
    @Index({unique: true})
    username: string;

    @Column({name: 'password', type:'varchar'})
    password: string;

    @Column({name: 'forget_password', type:'bit'})
    forgetPassword: boolean;

    @Column({name: 'device', length: 255, type:'varchar'})
    device: string;

    @Column({name: 'role_id', length: 255, type:'varchar'})
    roleId: string;

    @Column({ name: "status", type: 'varchar', length: 255 })
    status: string;
}