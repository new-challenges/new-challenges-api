import { Column, Entity } from "typeorm";
import { PKStringEnity } from "./base/base.entity";

@Entity("user")
export class UserEntity extends PKStringEnity {
    @Column({ name: "fullname", type: 'varchar'})
    fullname: string;

    @Column({ name: "gender", type: 'varchar', length: 50})
    gender: string;

    @Column({ name: "birthday", type: 'date'})
    birthday: Date;

    @Column({ name: "phone", type: 'varchar', length: 50})
    phone: string;

    @Column({ name: "address", type: 'varchar', length: 500})
    address: string;

    @Column({ name: "ward", type: 'varchar', length: 50})
    ward: string;

    @Column({ name: "district", type: 'varchar', length: 50})
    district: string;

    @Column({ name: "city", type: 'varchar', length: 50})
    city: string;

    @Column({ name: "authentication_id", type: 'varchar', length: 50})
    authenticationId: number;
}