const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET Route
router.get('/:id', (req, res) => {
    console.log('/comment GET route GOOD!');
    console.log('is authenticated?');
  
  
    const queryText = `SELECT * FROM "comments" WHERE "post_id" = $1 ORDER BY "date" DESC;`;

    const values = [req.params.id]
  
    pool.query(queryText, values).then((result) => {
      // console.log('results', result.rows)
      res.send(result.rows);
      // res.sendStatus(200)// For testing only, can be removed
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });
    
  });


  //POST Route
  router.post('/', (req, res) => {
    // endpoint functionality
  
    //req.user.id is the currently logged in user's id: 
    //this is NOT sent on params, it is on the server
    const queryValues = [req.user.id, req.body.post_id, req.body.comment, req.body.image, req.body.video]
  
    const queryText = `
    INSERT INTO "comments" 
    ("user_id", "post_id", "comment", "image", "video")
    VALUES ($1, $2, $3, $4, $5)`;
  
    console.log(req.body);
    
  pool
    .query(queryText, queryValues)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {
      console.log('error posting item', err);
      res.sendStatus(500);
    });
  });

  module.exports = router;