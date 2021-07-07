const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/', (req, res) => {
    pool.query('SELECT * FROM links', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});