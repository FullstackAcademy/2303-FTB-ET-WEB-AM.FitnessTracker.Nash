require("dotenv").config()
const express = require("express")
const app = express()

// Setup your Middleware and API Router here
const { client } = require("./db");

// Setup your Middleware and API Router here -------------
// IMPORTANT: While writing these routes, have one terminal open, running the server using   npm run start:dev   and the other terminal running
//   npm run test:watch api     script to run automated tests to verify we have created the routes correctly.
// All database adapters still need to be imported into db/seedData.js for the tests to pass.

// Require morgan middleware
const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());

const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

app.use("/api", require("./api"));

app.get("*", (req, res, next) => {
  res
    .status(404)
    .send({
      error: "404 - Not Found",
      message: "No route found for the requested URL",
    });
});

module.exports = app;
