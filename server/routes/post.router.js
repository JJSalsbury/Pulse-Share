const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/outcomesList', rejectUnauthenticated,(req, res) => {
  // GET route code here
    const queryText = `
        SELECT * FROM "outcomes";
    `;
    pool
        .query(queryText)
        .then(result => {
        res.send(result.rows)
        })
        .catch((err) => {
        console.log('Outcomes GET failed ', err);
        res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated,(req, res) => {
  // POST route code here
  const title = req.body.postTitle;
  const post = req.body.postBody;
  const image = req.body.postImage;
  const video = 'works';
  const outcome_id = req.body.postTag;
  

  const queryText = `
    INSERT INTO "posts" ("title", "post", "image", "video", "user_id", "outcome_id")
    VALUES ($1, $2, $3, $4, $5, $6);
  `;

  const values = [
    title,
    post,
    image,
    video,
    req.user.id,
    outcome_id
  ]
  pool
    .query(queryText, values)
    .then(result => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('Create new post failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;
