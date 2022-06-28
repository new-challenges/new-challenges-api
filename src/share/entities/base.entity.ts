import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {

    @Column({ type: 'varchar',name: 'created_by'})
    createdBy: string;

    @CreateDateColumn({ type: 'timestamp',name: 'created_at'})
    createdAt: Date;

    @Column({ type: 'varchar',name: 'updated_by'})
    updatedBy: string;

    @UpdateDateColumn({ type: 'timestamp',name: 'updated_at'})
    updatedAt: Date;
}

/**
 * AutoIncrementEntity
 */
export class AutoIncrementEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
}