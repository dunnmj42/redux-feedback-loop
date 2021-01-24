const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// POST ROUTE
router.post("/", (req, res) => {
  let newFeedback = req.body;

  let feeling = newFeedback.feeling.feeling;
  let understanding = newFeedback.understanding.understanding;
  let support = newFeedback.support.support;
  let comments = newFeedback.comments.comments;

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                  VALUES ($1, $2, $3, $4);`;

  pool
    .query(queryText, [feeling, understanding, support, comments])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
}); // END POST

// GET ROUTE
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM feedback ORDER BY id;`;

  pool
    .query(queryText)
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${queryText}`, error);
      res.sendStatus(500);
    });
}); // END GET

// Admin component DELETE ROUTE
router.delete("/delete/:id", (req, res) => {
  let id = req.params.id; // DELETE TARGET
  console.log(id);

  pool
    .query('DELETE FROM "feedback" WHERE "id"=$1;', [id])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
}); // END DELETE

// Admin component PUT ROUTE for "flagged" toggle
router.put("/flag/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);

  let queryText = `
      UPDATE "feedback"
      SET "flagged" = NOT "flagged" 
      WHERE "id" = $1;`; // NOT toggles boolean value on UPDATE

  pool.query(queryText, [id]).then((results) => {
    console.log(results.rows);
    res.sendStatus(200);
  });
}); // END PUT

module.exports = router;
