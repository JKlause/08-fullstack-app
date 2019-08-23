require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const trptData = require('./trpt-data');
const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return Promise.all(
            trptData.map(trptPlayer => {
                return client.query(`
                    INSERT INTO trpt_players (last_name, first_name, age, main_type, second_type, main_ensemble, second_ensemble, is_college_teacher)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
                    `,
                [trptPlayer.lastName, trptPlayer.firstName, trptPlayer.age, trptPlayer.mainType, trptPlayer.secondType, trptPlayer.mainEnsemble, trptPlayer.secondEnsemble, trptPlayer.isCollegeTeacher]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });