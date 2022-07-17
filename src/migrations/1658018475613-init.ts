import { MigrationInterface, QueryRunner } from "typeorm";

export class init1658018475613 implements MigrationInterface {
    name = 'init1658018475613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "authentication" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "username" character varying(255) NOT NULL, "password" character varying NOT NULL, "forget_password" boolean NOT NULL DEFAULT '0', "device" character varying(255), "role_id" character varying(255) NOT NULL, "status" character varying(255) NOT NULL, CONSTRAINT "PK_684fcb9924c8502d64b129cc8b1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_d199be6d256ab14994e97c6fdd" ON "authentication" ("username") `);
        await queryRunner.query(`CREATE TABLE "challenges_details" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "challenges_id" integer NOT NULL, "question" character varying(1000) NOT NULL, "answer" character varying(255) NOT NULL, "currect_answer" character varying(255), "status" character varying(255) NOT NULL, CONSTRAINT "PK_b7eb01c426df17441043ff01e17" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_163b1776563aef16be16271aae" ON "challenges_details" ("challenges_id") `);
        await queryRunner.query(`CREATE TABLE "dictionary_example" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "dictionary_id" integer NOT NULL, "example" character varying(255), "description" character varying(1500), CONSTRAINT "PK_1d663aeecb9c8ebc1d5a340be8f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_6e319a299bc5ec2c91dadb7720" ON "dictionary_example" ("dictionary_id") `);
        await queryRunner.query(`CREATE TABLE "level" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "quanlity" integer NOT NULL, "description" character varying(1500), CONSTRAINT "PK_d3f1a7a6f09f1c3144bacdc6bcc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "token_puzzle_pieces" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "tokenId" character varying(255) NOT NULL, "images" character varying(1000), CONSTRAINT "PK_20da8bb763b04f848d82b2ea15e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "token" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" character varying NOT NULL, "name" character varying(255) NOT NULL, "images" character varying(1000), "number_of_pieces" integer NOT NULL, "level" integer NOT NULL, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "challenges" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "user_id" character varying(255) NOT NULL, "start_time" TIMESTAMP NOT NULL, "end_time" TIMESTAMP NOT NULL, "quanlity" integer NOT NULL, "completed" integer NOT NULL, "status" character varying(255) NOT NULL, CONSTRAINT "PK_1e664e93171e20fe4d6125466af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bc284832a2fe906a52e9a1caab" ON "challenges" ("user_id") `);
        await queryRunner.query(`CREATE TABLE "dictionary" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "example" character varying(255) NOT NULL, "type_of_word" character varying(50) NOT NULL, "meaning" character varying(1000) NOT NULL, CONSTRAINT "PK_d17df343bd5d01ed62dd0e55e4a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "otp" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" character varying NOT NULL, "expired_date" TIMESTAMP NOT NULL, "opt" character varying NOT NULL, "expired" boolean NOT NULL DEFAULT '0', "otp_type" character varying NOT NULL DEFAULT 'SIGN_UP', "status" character varying NOT NULL DEFAULT 'REQUEST_OTP', CONSTRAINT "PK_32556d9d7b22031d7d0e1fd6723" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" character varying NOT NULL, "name" character varying(255) NOT NULL, "description" character varying(255), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "answer" character varying(255), "point" integer, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transaction" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" character varying NOT NULL, "from_wallet" character varying(255) NOT NULL, "to_wallet" character varying(255) NOT NULL, "token_id" character varying(255) NOT NULL, "quanlity" integer NOT NULL, "amount" numeric NOT NULL, "status" character varying(255) NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_wallet_ref" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "user_id" character varying(255) NOT NULL, "wallet_id" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, "wallet_type" character varying(255) NOT NULL, CONSTRAINT "PK_e7a7c961e3549cb624ba64d7843" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_966400c9cae3ed54d6f170119f" ON "user_wallet_ref" ("user_id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_575e951324ac0b2f89dfee1c25" ON "user_wallet_ref" ("wallet_id") `);
        await queryRunner.query(`CREATE TABLE "user" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" character varying NOT NULL, "fullname" character varying(255) NOT NULL, "gender" character varying(50) NOT NULL, "birthday" date NOT NULL, "phone" character varying(50), "address" character varying(500), "ward" character varying(50), "district" character varying(50), "city" character varying(50), "authentication_id" character varying(50) NOT NULL, "status" character varying(255), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "wallet-token-ref" ("created_by" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "user_id" character varying(255) NOT NULL, "wallet_id" character varying(255) NOT NULL, "token_id" character varying(255) NOT NULL, "quanlity" integer NOT NULL, "amount" numeric NOT NULL, CONSTRAINT "PK_0e088693abf1131acab1d3f3eff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9c4f3b1af37f46027b9c2cf51f" ON "wallet-token-ref" ("user_id") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_9c4f3b1af37f46027b9c2cf51f"`);
        await queryRunner.query(`DROP TABLE "wallet-token-ref"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_575e951324ac0b2f89dfee1c25"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_966400c9cae3ed54d6f170119f"`);
        await queryRunner.query(`DROP TABLE "user_wallet_ref"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
        await queryRunner.query(`DROP TABLE "question"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "otp"`);
        await queryRunner.query(`DROP TABLE "dictionary"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bc284832a2fe906a52e9a1caab"`);
        await queryRunner.query(`DROP TABLE "challenges"`);
        await queryRunner.query(`DROP TABLE "token"`);
        await queryRunner.query(`DROP TABLE "token_puzzle_pieces"`);
        await queryRunner.query(`DROP TABLE "level"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6e319a299bc5ec2c91dadb7720"`);
        await queryRunner.query(`DROP TABLE "dictionary_example"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_163b1776563aef16be16271aae"`);
        await queryRunner.query(`DROP TABLE "challenges_details"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d199be6d256ab14994e97c6fdd"`);
        await queryRunner.query(`DROP TABLE "authentication"`);
    }

}
