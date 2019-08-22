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
        lastName,
        firstName,
        age,
        mainType,
        secondType,
        mainEnsemble,
        secondEnsemble,
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