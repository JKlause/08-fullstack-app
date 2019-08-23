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
        id,
        last_name as lastName,
        first_name as firstName, 
        age,
        main_type as mainType,
        second_type as secondType,
        main_ensemble as mainEnsemble,
        second_ensemble as secondEnsemble,
        is_college_teacher as "isCollegeTeacher"
    FROM trpt_players;
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