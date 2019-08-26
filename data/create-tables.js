require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;

const client = new Client(process.env.DATABASE_URL);

client.connect() 
    .then(() => {
        return client.query(`
            CREATE TABLE types (
                id SERIAL PRIMARY KEY NOT NULL,
                name VARCHAR(256) NOT NULL
            );

            CREATE TABLE ensembles (
                id SERIAL PRIMARY KEY NOT NULL
                name VARCHAR(256) NOT NULL
            );

            CREATE TABLE trpt_players (
                id SERIAL PRIMARY KEY NOT NULL,
                last_name VARCHAR(256) NOT NULL,
                first_name VARCHAR(256) NOT NULL,
                age INTEGER NOT NULL,
                main_type_id INTEGER NOT NULL references types(id),
                second_type_id INTEGER NOT NULL references types(id),
                main_ensemble_id INTEGER NOT NULL references ensembles(id), 
                second_ensemble_id INTEGER NOT NULL references ensembles(id),
                is_college_teacher BOOLEAN NOT NULL
            )
        `);
    })
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });