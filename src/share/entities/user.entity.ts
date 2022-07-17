import { Column, Entity } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKStringEnity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.USER)
export class UserEntity extends PKStringEnity {
    @Column({ name: 'fullname', type: 'varchar', length: 255 })
    fullname: string;

    @Column({ name: 'gender', type: 'varchar', length: 50 })
    gender: string;

    @Column({ name: 'birthday', type: 'date' })
    birthday: Date;

    @Column({ name: 'phone', type: 'varchar', length: 50, nullable: true })
    phone: string;

    @Column({ name: 'address', type: 'varchar', length: 500, nullable: true })
    address: string;

    @Column({ name: 'ward', type: 'varchar', length: 50, nullable: true })
    ward: string;

    @Column({ name: 'district', type: 'varchar', length: 50, nullable: true })
    district: string;

    @Column({ name: 'city', type: 'varchar', length: 50, nullable: true })
    city: string;

    @Column({ name: 'authentication_id', type: 'varchar', length: 50 })
    authenticationId: number;

    @Column({ name: 'status', type: 'varchar', length: 255, nullable: true })
    status: string;
}