const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const bcrypt = require("bcryptjs");
app.use(cors());
app.use(bodyParser());
require("dotenv").config();
const port = process.env.PORT || 1234;

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

app.get("/user-watchlist/:id", (req, res) => {
  const userid = req.params.id;
  db.Watchlist.findAll({
    where: {
      userid: userid,
    },
  })
    .then((stocks) => {
      if (stocks) {
        res.send({ watchlist: stocks });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/remove-item/:id", (req, res) => {
  const userid = req.params.id;
  const itemToDelete = req.body.item;

  db.Watchlist.destroy({
    where: {
      userid: userid,
      symbol: itemToDelete,
    },
  });

  db.Watchlist.findAll({
    where: {
      userid: userid,
    },
  })
    .then((response) => {
      res.send({ watchlist: response });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/watchlist", (req, res) => {
  const symbol = req.body.symbol;
  const userid = req.body.userid;

  db.Watchlist.findAll({
    where: {
      userid: userid,
    },
  }).then((response) => {
    if (response.length <= 3) {
      db.Watchlist.create({
        userid: userid,
        symbol: symbol,
      });
      res.send({ message: "Successfully added" });
    } else {
      res.send({ message: "You can only have 4 watchlisted items" });
    }
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.NewUsers.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user !== null) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          res.send({ login: true, id: user.id });
        }
      });
    } else {
      res.send({ login: false });
    }
  });
});

app.listen(port, (req, res) => {
  console.log("server up...");
});
