const mongoose = require("mongoose");
require("dotenv").config();
const DBhost = process.env.DB_HOST;
const db = mongoose
  .connect(DBhost, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    poolSize: 5,
  })
  .then(() => {
    console.log("Database connect");
  });
module.exports = db;
