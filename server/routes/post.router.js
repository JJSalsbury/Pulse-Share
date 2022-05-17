const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Get specific post details
router.get('/:id', (req, res) => {
  query = `
          SELECT * FROM "posts" WHERE id = $1;
          `;

  pool.query(query, [req.params.id])
    .then(result => {
      res.send(result.rows);
    }).catch(err => {
      console.log('Error in getting locations', err);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;