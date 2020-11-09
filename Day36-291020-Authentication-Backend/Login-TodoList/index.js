const express = require("express");
const db = require("./models");
const app = express();
const userRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRoutes);
app.use("/todos", todoRoutes);

app.listen(8000, () => {
  console.log("Server is running.");
});

db.sequelize.sync().then(() => {
  console.log("Database is running");
});