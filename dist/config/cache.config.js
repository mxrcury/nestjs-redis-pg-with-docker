"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheConfig = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const core_1 = require("@nestjs/core");
const redisStore = require("cache-manager-redis-store");
class CacheConfig {
    static getConfig() {
        return {
            isGlobal: true,
            store: redisStore,
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
        };
    }
    static getInterceptor() {
        return {
            provide: core_1.APP_INTERCEPTOR,
            useClass: cache_manager_1.CacheInterceptor,
        };
    }
}
exports.CacheConfig = CacheConfig;
//# sourceMappingURL=cache.config.js.map