import { Column, Entity, Index, Unique } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKAutoIncrementEntity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.WALLET_TOKEN_REF)
// @Unique('wallet_token_ref_unique', ['user_id', 'wallet_id', 'token_id'])
export class WalletTokenRefEntity extends PKAutoIncrementEntity{

    @Column({name:'user_id', type: 'varchar', length: 255})
    @Index({unique: false})
    userId: string;

    @Column({name:'wallet_id', type: 'varchar', length: 255})
    walletId: string;

    @Column({name:'token_id', type: 'varchar', length: 255})
    tokenId: string;

    @Column({ name: "quanlity"})
    quanlity: number;
    
    @Column({ name: 'amount', type: 'decimal' })
    amount: number;
}