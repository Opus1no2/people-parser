'use strict';

const express = require("express");
const app = express();

app
  .post("/records", require("./routes"))
  .get("/records/gender", require("./routes/gender"))
  .get("/records/birthdate", require("./routes/birthdate"))
  .get("/records/name", require("./routes/name"))

app.listen(8888, () => {
  console.log('app listening on 8888');
});
