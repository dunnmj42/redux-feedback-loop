const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  let newFeedback = req.body
  console.log(newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                  VALUES ($1, $2, $3, $4);`;

  pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then(result => {
      res.sendStatus(201);
    }).catch(error => {
      console.error(error);
      res.sendStatus(500);
    });

});

module.exports = router;