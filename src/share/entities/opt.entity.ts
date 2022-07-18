import { Column, Entity } from "typeorm";
import { OPT_STATUS_CONSTANTS } from "../constants/app.const";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKStringEnity } from "./base/base.entity";

@Entity(ENTITY_CONTANSTS.OTP)
export class OTPEnity extends PKStringEnity{

    @Column({ type: 'timestamp', name: 'expired_date' })
    expiredDate: Date;

    @Column({ type: 'varchar', name: 'opt' })
    opt: string;

    @Column({ type: 'boolean', name: 'expired', default: 0 })
    expired: boolean;

    @Column({ type: 'varchar', name: 'otp_type', default: 'SIGN_UP' })
    otpType: string;

    @Column({ type: 'varchar', name: 'status', default: OPT_STATUS_CONSTANTS.REQUEST_OTP })
    status: string;
}