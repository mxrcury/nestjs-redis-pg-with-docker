import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface FilmCreationAttrs {
    readonly title: string;
    readonly description: string;
    readonly releaseYear: number;
    readonly rating: number;
    readonly length: number;
}

@Table({ tableName: 'films', timestamps: false })
export class Film extends Model<Film, FilmCreationAttrs> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrementIdentity: true, unique: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    releaseYear: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    rating: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    length: number;
}