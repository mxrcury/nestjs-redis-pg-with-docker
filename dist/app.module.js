"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cache_manager_1 = require("@nestjs/cache-manager");
const cache_config_1 = require("./config/cache.config");
const films_module_1 = require("./modules/films/films.module");
const sequelize_1 = require("@nestjs/sequelize");
const films_model_1 = require("./modules/films/films.model");
const nestjs_sequelize_seeder_1 = require("nestjs-sequelize-seeder");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            nestjs_sequelize_seeder_1.SeederModule.forRoot({ enableAutoId: true, isGlobal: true, logging: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: +process.env.POSTGRES_PORT,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [films_model_1.Film],
                autoLoadModels: true
            }),
            cache_manager_1.CacheModule.register(cache_config_1.CacheConfig.getConfig()),
            films_module_1.FilmsModule
        ],
        providers: [
            cache_config_1.CacheConfig.getInterceptor()
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map