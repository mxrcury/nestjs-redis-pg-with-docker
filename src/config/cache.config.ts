import { CacheInterceptor } from '@nestjs/cache-manager'
import { Provider } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import * as redisStore from 'cache-manager-redis-store'

export class CacheConfig {
    static getConfig(): CacheConfig {
        return {
            isGlobal: true,
            store: redisStore,
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
        }
    }
    static getInterceptor(): Provider {
        return {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        }
    }
}