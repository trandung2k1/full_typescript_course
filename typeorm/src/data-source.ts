import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
    type: 'mssql',
    host: 'localhost',
    username: 'sa',
    password: '123456789',
    database: 'TestDB',
    synchronize: true,
    port: 1433,
    extra: {
        trustServerCertificate: true,
    },
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});
