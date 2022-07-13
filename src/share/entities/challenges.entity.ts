import { Column, Entity, Index } from "typeorm";
import { ENTITY_CONTANSTS } from "../constants/entity.const";
import { PKAutoIncrementEntity } from "./base/base.entity";


@Entity(ENTITY_CONTANSTS.CHALLENGES)
export class ChallengesEntity extends PKAutoIncrementEntity {
    @Column({ name: 'user_id', type: 'varchar', length: 255 })
    @Index({ unique: false,  })
    userId: string;

    @Column({ name: 'start_time', type: 'timestamp' })
    startTime: Date;

    @Column({ name: 'end_time', type: 'timestamp' })
    endTime: Date;

    @Column({ name: 'quanlity' })
    quanlity: number;

    @Column({ name: 'completed' })
    completed: number;

    @Column({ name: 'status', type: 'varchar', length: 255 })
    status: string;
}