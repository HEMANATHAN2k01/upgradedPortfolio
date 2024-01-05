const mongoose = require("mongoose");

require("dotenv").config();

const dbs = mongoose.connect(process.env.DBS_URL);
try {
  console.log("dbsConnected!");
} catch (error) {
  console.log(error);
  process.exit();
}

module.exports = dbs;
