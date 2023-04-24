import { Provider } from '@nestjs/common';
export declare class CacheConfig {
    static getConfig(): CacheConfig;
    static getInterceptor(): Provider;
}
