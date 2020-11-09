const express = require('express');
const personRoutes = require('./routes/person')
const todoRoutes = require('./routes/todo');
const db = require('./models/index'); //'./models/index' ==='./models'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/persons', personRoutes);
app.use('/todos', todoRoutes);

app.listen(8000, () => {
  console.log("Server is running at 8000");
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database connected.");
}).catch(err => {
  console.log(err);
})