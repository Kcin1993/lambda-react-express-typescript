### How to build

### Create an express serverless.

[Referene](https://serverless.com/blog/serverless-express-rest-api/)

- Setting up express
- Add serverless offline plugin

### Make CRA client (typescript version)

```
// in root folder
$ npx create-react-app client --typescript
```

### Build client code and connect to serverless express

```
// in client folder
$ yarn build
```

```
// in root folder
$ yarn add path body-parser

// in root folder index.js
const serverless = require("serverless-http");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports.handler = serverless(app);
```
