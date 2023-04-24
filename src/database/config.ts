module.exports = {
    development: {
        dialect: 'postgres',
        host: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'movies-db',
        url: "postgres://postgres:postgres@127.0.0.1:5432/movies-db"
    },
    test: {
        dialect: 'postgres',
        host: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'movies-db',
    },
    production: {
        dialect: 'postgres',
        host: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'movies-db',
    },
}