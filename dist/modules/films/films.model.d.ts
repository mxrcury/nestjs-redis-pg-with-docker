import { Model } from 'sequelize-typescript';
interface FilmCreationAttrs {
    readonly title: string;
    readonly description: string;
    readonly releaseYear: number;
    readonly rating: number;
    readonly length: number;
}
export declare class Film extends Model<Film, FilmCreationAttrs> {
    id: number;
    title: string;
    description: string;
    releaseYear: number;
    rating: number;
    length: number;
}
export {};
