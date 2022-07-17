import { MigrationInterface, QueryRunner } from "typeorm";

export class updateDb1658037519823 implements MigrationInterface {
    name = 'updateDb1658037519823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "level" ADD "passed" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "level" ADD "practice_time" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "level" RENAME COLUMN "quanlity" TO "quantity" `);
        await queryRunner.query(`ALTER TABLE "question" ADD "description" character varying(1500)`);
        await queryRunner.query(`ALTER TABLE "authentication" ALTER COLUMN "forget_password" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "otp" ALTER COLUMN "expired" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "challenges" ADD "challenges_type" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "challenges" ADD "level_id" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "challenges" ADD "passed" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "otp" ALTER COLUMN "expired" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "authentication" ALTER COLUMN "forget_password" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "level" DROP COLUMN "passed"`);
        await queryRunner.query(`ALTER TABLE "level" DROP COLUMN "practice_time"`);
        await queryRunner.query(`ALTER TABLE "challenges" DROP COLUMN "challenges_type"`);
    }

}
