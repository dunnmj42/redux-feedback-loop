const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/router");
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/submit", router); // ROUTE FOR FEEDBACK SUBMISSION
app.use("/admin", router); // ROUTE FOR Admin COMPONENT

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
