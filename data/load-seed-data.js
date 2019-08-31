require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const trptData = require('./trpt-data');
const types = require('./types');
const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return Promise.all(
            types.map(type => {
                return client.query(`
                    INSERT INTO types (name)
                    VALUES ($1)
                    RETURNING *;
                `,
                [type])
                    .then(result => result.rows[0]);
            })
        );
    })
    .then(types => {
        return Promise.all(
            trptData.map(trptPlayer => {
                const main_type = types.find(type => {
                    return type.name === trptPlayer.mainType;
                });
                const mainTypeId = main_type.id;

                return client.query(`
                    INSERT INTO trpt_players (last_name, first_name, age, main_type_id, main_ensemble, is_college_teacher)
                    VALUES ($1, $2, $3, $4, $5, $6, $7);
                    `,
                [trptPlayer.lastName, trptPlayer.firstName, trptPlayer.age, mainTypeId, trptPlayer.mainEnsemble, trptPlayer.isCollegeTeacher]);
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