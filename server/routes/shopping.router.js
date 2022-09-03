const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET ROUTE - TODO Oscar
router.get('/', (req, res) => {
    console.log('in GET route request');
    let queryText = 'SELECT * FROM shoppingList;';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});












// POST ROUTE
router.post('/', (req, res) => {
    console.log('in POST route');
    let item = req.body;
    let queryText = 'INSERT INTO shoppingList (name, quantity, unit) VALUES ($1, $2, $3)';
    pool.query(queryText, [item.name, item.quantity, item.unit])
        .then((results) => {
            console.log(results);
            res.send(results);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
});












// DELETE












// PUT











module.exports = router;