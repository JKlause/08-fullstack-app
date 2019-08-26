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
                const type = types.find(type => {
                    return type.name === cat.type;
                });
                const typeId = type.id;

                return client.query(`
                    INSERT INTO trpt_players (last_name, first_name, age, type_id, type_id, main_ensemble, second_ensemble, is_college_teacher)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
                    `,
                [trptPlayer.lastName, trptPlayer.firstName, trptPlayer.age, typeId, typeId, trptPlayer.mainEnsemble, trptPlayer.secondEnsemble, trptPlayer.isCollegeTeacher]);
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