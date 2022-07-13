import { Column, Entity } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKStringEnity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.TRANSATION)
export class TransactionEntity extends PKStringEnity {

    @Column({ name: "from_wallet", type: 'varchar', length: 255 })
    fromWallet: string;

    @Column({ name: "to_wallet", type: 'varchar', length: 255 })
    toWallet: string;

    @Column({ name: "token_id", type: 'varchar', length: 255 })
    tokenId: string;

    @Column({ name: "quanlity" })
    quanlity: number;

    @Column({ name: "amount", type: 'decimal' })
    amount: number;

    @Column({ name: "status", type: 'varchar', length: 255 })
    status: string;
}