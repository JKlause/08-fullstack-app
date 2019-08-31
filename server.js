require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.get('/api/trpt-players', (req, res) => {
    client.query(`
    SELECT
        p.id,
        p.last_name as "lastName",
        p.first_name as "firstName", 
        p.age,
        t.name as "mainType",
        p.main_ensemble as "mainEnsemble",
        p.is_college_teacher as "isCollegeTeacher"
    FROM trpt_players p
    JOIN types t
    ON p.main_type_id = t.id
    ORDER BY p.last_name;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/trpt-players/:id', (req, res) => {
    const id = req.params.id;

    client.query(`
        SELECT
            p.*,
            t.name as manType
        FROM trpt_players p
        JOIN types t
        ON p.main_type_id = t.id
        WHERE c.id = $1
    `,
    [id]
    )
        .then(result => {
            const trptPlayer = result.rows[0];
            if(!trptPlayer) {
                res.status(404).json({
                    error: `Trumpet Player id ${id} does not exist`
                });
            }
            else {
                res.json(result.rows[0]);
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.post('/api/trpt-players', (req, res) => {
    const trptPlayer = req.body;
    client.query(`
        INSERT INTO trpt_players (last_name, first_name, age, main_type_id, main_ensemble, is_college_teacher)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
        `,
    [trptPlayer.lastName, trptPlayer.firstName, trptPlayer.age, mainTypeId, trptPlayer.mainEnsemble, trptPlayer.isCollegeTeacher]
    )
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        }); 
});

app.get('/api/types', (req, res) => {
    client.query(`
        SELECT
            id,
            name
        FROM types
        ORDER BY name;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });   
});

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});