const express = require("express");
const Router = express.Router();
const GetControl = require("../controllers/GetControl");

Router.get("/", GetControl.default);

module.exports = Router;
