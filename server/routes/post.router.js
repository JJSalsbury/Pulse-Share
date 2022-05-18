const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Get specific post details
router.get('/:id', (req, res) => {
  const query = `
          SELECT "user".username, "profiles".profile_picture, "posts".id, to_char("posts".date, 'mm/dd/yy') as "date", 
          to_char("posts".time, 'hh12:mi AM') as "time", "posts".title, "posts".image,"posts".video, "posts".post, 
          "posts".outcome_id, "posts".user_id FROM "posts"
          JOIN "user" ON "posts".user_id = "user".id
          JOIN "profiles" ON "user".id = "profiles".user_id
          WHERE "posts".id = $1;
          `;

  pool.query(query, [req.params.id])
    .then(result => {
      res.send(result.rows);
    }).catch(err => {
      console.log('Error in getting post', err);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {

  if (req.user.access_level >= 1) {
    const query = `DELETE FROM "posts" WHERE "id" = $1;`

    pool.query(query, [req.params.id])
      .then(result => {
        res.sendStatus(204);
      }).catch(err => {
        console.log('Error in deleting post', err);
      })

  } else {
    const query = `DELETE FROM "posts" WHERE "id" = $1 AND "user_id" = $2;`

    pool.query(query, [req.params.id, req.user.id])
      .then(result => {
        res.sendStatus(204);
      }).catch(err => {
        console.log('Error in deleting post', err);
      })

  }



})

module.exports = router;