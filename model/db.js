const mongoose = require("mongoose");

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
