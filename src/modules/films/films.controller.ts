import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmsService } from 'src/modules/films/films.service';
import { CreateFilmDto } from 'src/modules/films/dto/create-film.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) { }

  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }

  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':title')
  findByTitle(@Param('title') title: string) {
    return this.filmsService.findByTitle(title);
  }
}
