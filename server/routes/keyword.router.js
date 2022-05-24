const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:keyword', rejectUnauthenticated, (req, res) => {
    console.log('keyword is:', req.params.keyword);
    const keyword = `%${req.params.keyword}%`;
    console.log(keyword);
    
    const query = `SELECT * FROM "posts"
    WHERE "title" ILIKE $1
    OR "post" ILIKE $1 
    ORDER BY "id" DESC;`;
    const values = [keyword];
    pool.query(query, values)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR SEARCHING FOR KEYWORD IN ROUTER', err);
            res.sendStatus(500)
        })
    
});

module.exports = router;