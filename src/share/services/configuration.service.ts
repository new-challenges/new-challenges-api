import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

export class ConfigurationService {
    constructor() {
        dotenv.config({
            path: `.env`,
        });

        // Replace \\n with \n to support multiline strings in AWS
        for (const envName of Object.keys(process.env)) {
            process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        }
    }

    public get APP_CONFIG() {
        return {
            APPLICATION: {
                API_REFIX: process.env.API_REFIX,
                PORT: Number(process.env.PORT) || 3000
            },
            MYSQL: {
                DB_HOST: process.env.DB_HOST,
                DB_PORT: Number(process.env.DB_PORT) || 3306,
                DB_NAME: process.env.DB_NAME,
                DB_USER: process.env.DB_USER,
                DB_PASSWORD: process.env.DB_PASSWORD
            },
            AURA_NETWORK: {

            }
        }
    }

    public typeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT) || 3306,
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,            
            entities: [join(__dirname,'./share/entities/**', '*.entity.{ts,js}')],
            migrations: [join(__dirname,'./migrations/**', '*{.ts,.js}')],
            migrationsRun: false,
            synchronize: false,
            logging: true
        }
    }
}

export const APP_CONFIG = new ConfigurationService().APP_CONFIG
