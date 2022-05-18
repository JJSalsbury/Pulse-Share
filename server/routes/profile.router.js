const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});
// get specific users profile information for profile page
router.get('/:id', (req, res) => {
  const query = `SELECT * FROM "profiles" WHERE "user_id" =$1;`

  pool.query(query, [req.params.id])
    .then((results) => res.send(results.rows))
    .catch((err) => {
      console.log('Error in PROFILE GET', err);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const id = req.body.id

  const queryText = `INSERT INTO "profiles" (user_id)
        VALUES ($1)`;
  pool
    .query(queryText, [id])
    .then(result => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// router.put('/:id', rejectUnauthenticated, (req, res) => {


//   const update = req.body
//   const query = `UPDATE "profiles" SET  "edible" = $1, "description" = $2,`


//   const values = [update.edible, req.params.id]
//   pool.query(query, values)
//     .then(result => {
//       res.sendStatus(200);
//     }).catch(error => {
//       console.log('error', error);

//     })

// });


module.exports = router;