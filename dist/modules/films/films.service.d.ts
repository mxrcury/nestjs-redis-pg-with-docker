import { CreateFilmDto } from 'src/modules/films/dto/create-film.dto';
import { Film } from './films.model';
export declare class FilmsService {
    private readonly filmRepository;
    constructor(filmRepository: typeof Film);
    findAll(): Promise<Film[]>;
    findByTitle(title: string): Promise<Film>;
    create(dto: CreateFilmDto): Promise<void>;
}
