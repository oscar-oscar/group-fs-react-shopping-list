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












// DELETE












// PUT











module.exports = router;