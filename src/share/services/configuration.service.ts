import * as dotenv from 'dotenv';

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
                PORT: Number(process.env.PORT) || 3000,
                ENV: process.env.ENV,
                JWT: {
                    SECRET_KEY: String(process.env.JWT_SECRET_KEY),
                    EXPIRES_IN: String(process.env.JWT_EXPIRES_IN),
                    ALGORTHM: process.env.JWT_ALGORTHM,
                    STRATEGY: process.env.JWT_STRATEGY
                },
                EMAIL:{
                    HOST: process.env.EMAIL_HOST,
                    ACCOUNT: process.env.EMAIL_ACCOUNT,
                    PASSWORD: process.env.EMAIL_PASSWORD
                }
            },
            MYSQL: {
                DB_HOST: process.env.DB_HOST,
                DB_PORT: Number(process.env.DB_PORT) || 3306,
                DB_NAME: process.env.DB_NAME,
                DB_USER: process.env.DB_USER,
                DB_PASSWORD: process.env.DB_PASSWORD
            },
            AURA_NETWORK: {

            },
            SUPPER_ADMIN: {
                USERNAME: process.env.SUPPER_ADMIN,
                PASSWORD: process.env.SUPPER_ADMIN_PW,
            }
        }
    }

    public typeOrmConfig(): any {
        const env = process.env.ENV;
        const connection: any = {
            type: `postgres`,
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT) || 3306,
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            entities: ['dist/**/*.entity.{ts,js}'],
            migrations: ['dist/migrations/**/*{.ts,.js}'],
            migrationsRun: true,
            synchronize: false,
            logging: true
        }

        if (env !== 'Dev') {
            connection.ssl = false;
            connection.extra = {
                ssl: {
                    rejectUnauthorized: false,
                }
            };
        }
        return connection;
    }
}
export const APP_CONFIG = new ConfigurationService().APP_CONFIG
