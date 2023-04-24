"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmSeed = void 0;
const nestjs_sequelize_seeder_1 = require("nestjs-sequelize-seeder");
const films_model_1 = require("../../modules/films/films.model");
let FilmSeed = class FilmSeed {
    run(options) {
        const films = ;
        return films;
    }
};
FilmSeed = __decorate([
    (0, nestjs_sequelize_seeder_1.Seeder)({
        model: typeof films_model_1.Film
    })
], FilmSeed);
exports.FilmSeed = FilmSeed;
//# sourceMappingURL=films.seed.js.map