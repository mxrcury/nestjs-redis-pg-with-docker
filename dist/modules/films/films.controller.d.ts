import { FilmsService } from 'src/modules/films/films.service';
import { CreateFilmDto } from 'src/modules/films/dto/create-film.dto';
export declare class FilmsController {
    private readonly filmsService;
    constructor(filmsService: FilmsService);
    create(createFilmDto: CreateFilmDto): Promise<void>;
    findAll(): Promise<import("./films.model").Film[]>;
    findByTitle(title: string): Promise<import("./films.model").Film>;
}
