import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { CacheConfig } from 'src/config/cache.config';
import { FilmsModule } from 'src/modules/films/films.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Film } from './modules/films/films.model';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { OrmConfig } from './config/orm.config';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SeederModule.forRoot({ enableAutoId: true, isGlobal: true, logging: true }),
    SequelizeModule.forRoot(OrmConfig.getConfig()),
    CacheModule.register(CacheConfig.getConfig()),
    FilmsModule
  ],
  providers: [
    CacheConfig.getInterceptor()
  ]
})
export class AppModule { }
