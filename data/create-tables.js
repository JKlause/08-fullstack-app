require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;

const client = new Client(process.env.DATABASE_URL);

client.connect() 
    .then(() => {
        return client.query(`
            CREATE TABLE trpt_players (
                id SERIAL PRIMARY KEY NOT NULL,
                last_name VARCHAR(256) NOT NULL,
                firstN_nme VARCHAR(256) NOT NULL,
                age INTEGER NOT NULL,
                main_type VARCHAR(256) NOT NULL,
                second_type VARCHAR(256) NOT NULL,
                main_ensemble VARCHAR(256) NOT NULL,
                second_ensemble VARCHAR(256) NOT NULL,
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