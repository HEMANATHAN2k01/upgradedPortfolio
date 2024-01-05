const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const dbs = require("./config/dbs");
const Router = require("./routers/GetRoute");
const PostRouter = require("./routers/PostRoute");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(Router);
app.use(PostRouter);
dbs;

app.listen(4000, () =>
  console.log(`Server running on port : http://localhost:4000`)
);
