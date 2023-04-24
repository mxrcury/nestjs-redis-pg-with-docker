import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { Film } from "src/modules/films/films.model";
import 'dotenv/config'

export class OrmConfig {
    static getConfig(): SequelizeModuleOptions {
        return {
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Film],
            autoLoadModels: true
        }
    }
}