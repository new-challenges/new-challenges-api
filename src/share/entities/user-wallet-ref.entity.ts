import { Column, Entity, Index } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKAutoIncrementEntity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.USER_WALLET_REF)
export class UserWalletRefEntity extends PKAutoIncrementEntity{
    @Column({ name: "user_id", type: 'varchar', length: 255})
    @Index({unique: false})
    userId: string;

    @Column({ name: "wallet_id", type: 'varchar', length: 255})
    @Index({unique: true})
    walletId: string;

    @Column({ name: "name", type: 'varchar', length: 255})
    name: string;

    @Column({ name: "wallet_type", type: 'varchar', length: 255})
    walletType: string;
}