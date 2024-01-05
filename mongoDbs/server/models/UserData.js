const mongoose = require("mongoose");

const UserBioData = new mongoose.Schema({
  BioId: {
    type: String,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  Course: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
    unique: true,
  },
  DoB: {
    type: String,
    require: true,
  },
  Year: {
    type: String,
    require: true,
  },
  BloodGroup: {
    type: String,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
});

const BioData = mongoose.model("BioData", UserBioData);

module.exports = BioData;
