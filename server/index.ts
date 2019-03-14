import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";

const serverless = require("serverless-http");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports.handler = serverless(app);
