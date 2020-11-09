const express = require("express");
const app = express();
const db = require("./models");
const userRoutes = require('./rouetes/user');
const todoRoutes = require('./rouetes/todo');
const cors = require('cors');

require("./config/passport");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

app.listen("8000", () => {
  console.log("Server is running");
});

db.sequelize.sync()
  .then(() => {
    console.log("Data sync");
  })
  .catch(err => {
    console.log(err);
  });