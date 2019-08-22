require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;

const client = new Client(process.env.DATABASE_URL);

client.connect() 
    .then(() => {
        return client.query(`
            CREATE TABLE trpt_players (
                id SERIAL PRIMARY KEY NOT NULL,
                lastName VARCHAR(256) NOT NULL,
                firstName VARCHAR(256) NOT NULL,
                age INTEGER NOT NULL,
                mainType VARCHAR(256) NOT NULL,
                secondType VARCHAR(256) NOT NULL,
                mainEnsemble VARCHAR(256) NOT NULL,
                secondEnsemble VARCHAR(256) NOT NULL,
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