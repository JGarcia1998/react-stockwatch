const express = require("express");
// const db = require("./models");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser());

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "ktwpcusl",
  "ktwpcusl",
  "AQvgKlTr53LVoYf96TBy85XqI58OFXMI",
  {
    host: "ruby.db.elephantsql.com",
    dialect: "postgres",
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(1234, (req, res) => {
  console.log("server up...");
});
