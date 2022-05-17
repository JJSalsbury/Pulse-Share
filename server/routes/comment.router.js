const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    console.log('/comment GET route GOOD!');
    console.log('is authenticated?');
  
  
    const queryText = `SELECT * FROM "comments" ORDER BY "date" DESC;`;
  
    pool.query(queryText).then((result) => {
      // console.log('results', result.rows)
      res.send(result.rows);
      // res.sendStatus(200)// For testing only, can be removed
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });
    
  });

  module.exports = router;