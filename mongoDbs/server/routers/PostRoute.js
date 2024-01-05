const express = require("express");
const PostRouter = express.Router();
const PostControl = require("../controllers/PostControl");

PostRouter.post("/biodata", PostControl.Bio);

module.exports = PostRouter;
