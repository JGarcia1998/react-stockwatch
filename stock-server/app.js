const express = require("express");
// const db = require("./models");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser());

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `${process.env.DB}`,
  `${process.env.DB}`,
  `${process.env.KEY}`,
  {
    host: `${process.env.HOST}`,
    dialect: "postgres",
  }
);

try {
  sequelize.authenticate();
  console.log("Connection to database has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(1234, (req, res) => {
  console.log("server up...");
});
