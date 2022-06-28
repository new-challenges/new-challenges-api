module.exports = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: ['./src/share/entities/**', '*.entity.{ts,js}'],
    migrations: ['./src/migrations/**', '*{.ts,.js}'],
    cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/migrations',
    },
    migrationsRun: false,
    synchronize: false,
    migrationsTableName: 'migrations',
}