const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const bcrypt = require("bcryptjs");
app.use(cors());
app.use(bodyParser());
require("dotenv").config();

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

app.post("/create-account", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, 10, function (err, hash) {
    db.NewUsers.create({
      username: username,
      password: hash,
    });
  });
  res.send({ message: "Account created successfully" });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.NewUsers.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          res.send({ login: true, id: user.id });
        } else {
          res.send({ login: false });
        }
      });
    }
  });
});

app.listen(1234, (req, res) => {
  console.log("server up...");
});
