// GET route to get user's post history
router.get('/', rejectUnauthenticated, (req, res) => {
    const id = req.user.id;
    console.log(`the user id is:`, id)
    const queryText = `
        SELECT * FROM "posts"
        WHERE "user_id" = $1;
    `;
    const values = [id];
    pool
        .query(queryText, values)
        .then(result => {
        res.send(result.rows)
        })
        .catch((err) => {
        console.log('ERROR GETTING POST HISTORY IN ROUTER', err);
        res.sendStatus(500);
        });
  });

  module.exports = router;