import { Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {

    @Column({ type: 'varchar', name: 'created_by', nullable: true })
    createdBy: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'varchar', name: 'updated_by', nullable: true })
    updatedBy: string;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
}

/**
 * AutoIncrementEntity
 */
export class PKAutoIncrementEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
}

/**
 * StringEntity
 */
export class PKStringEnity extends BaseEntity {
    @PrimaryColumn()
    id: string;
}

/**
 * UUIDEntity
 */
export class PKUUIDEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid", { name: 'Id' })
    id: string;
}