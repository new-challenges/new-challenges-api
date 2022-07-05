import { Column } from "typeorm";
import { PKAutoIncrementEntity } from "./base/base.entity";

export class AuthenticationEntity extends PKAutoIncrementEntity{
    @Column({name: 'username', length: 255, type:'varchar'})
    username: string;

    @Column({name: 'password', type:'varchar'})
    password: string;

    @Column({name: 'forgetPassword', type:'bit'})
    forgetPassword: boolean;

    @Column({name: 'username', length: 255, type:'varchar'})
    device: string
}