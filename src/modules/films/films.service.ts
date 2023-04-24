import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFilmDto } from 'src/modules/films/dto/create-film.dto';
import { Film } from './films.model';

@Injectable()
export class FilmsService {
  constructor(@InjectModel(Film) private readonly filmRepository: typeof Film) { }
  async findAll() {
    return await this.filmRepository.findAll()
  }

  async findByTitle(title: string) {
    return await this.filmRepository.findOne({ where: { title } })
  }

  async create(dto: CreateFilmDto) {
    await this.filmRepository.create(dto)
  }
}
