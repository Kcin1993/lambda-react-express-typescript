## How to build

### Create an express serverless and using typescript.

[Referene](https://serverless.com/blog/serverless-express-rest-api/)

- Setting up express
- Add serverless offline plugin

```
//in root folder
$ yarn add path body-parser
$ yarn add @types/node @types/express @types/body-parser @types/aws-lambda
$ mkdir server
$ touch index.ts tsconfig.json
```

```
// in tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "../",
    "lib": ["es5", "es6", "dom", "esnext"],
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "alwaysStrict": true,
    "sourceMap": false,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "pretty": true
  },
  "exclude": ["node_modules"]
}

// in index.ts
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

```

### Make CRA client (typescript version)

```
// in root folder
$ npx create-react-app client --typescript

// in client folder
$ yarn build
```

### Update homepage. Make lambda endpoint consist with CRA

```
// in client package.json add following.
{
  ...
  "homepage": "/dev",
  ...
}
```

## Get Start

### Run CRA only

```
$ cd client
$ yarn start
```

### Run with local serverless

```
// in client folder
$ yarn build

// in server folder
$ yarn offline
```

Note. In CRA before build remove `"homepage": "/dev"` in package.json first

### Deploy to aws

```
// in client folder
$ yarn build

// in server folder
$ yarn deploy
```

Note. Make sure `"homepage": "/dev"` is added in package.json

## Reference

- [Deploy a REST API using Serverless, Express and Node.js](https://serverless.com/blog/serverless-express-rest-api/)
- [Rendering and serving a Create-React-App from an Express server running within a Lambda function](https://medium.com/@YatinBadal/rendering-and-serving-a-create-react-app-from-an-express-server-running-within-a-lambda-function-832576a5167e)
