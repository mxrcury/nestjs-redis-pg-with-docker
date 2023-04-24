import { Module } from '@nestjs/common';
import { FilmsService } from 'src/modules/films/films.service';
import { FilmsController } from 'src/modules/films/films.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Film } from './films.model';

@Module({
  imports: [SequelizeModule.forFeature([Film])],
  controllers: [FilmsController],
  providers: [FilmsService]
})
export class FilmsModule { }
