require('dotenv').config();

const pg = require('pg');
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
        DROP TABLE IF EXISTS trpt_players;
        DROP TABLE IF EXISTS types;
        DROP TABLE IF EXISTS ensembles;
        `);
    })
    .then(
        () => console.log('drop tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });