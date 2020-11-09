const db = require("../models");

const getAllTodos = async (req, res) => {
  console.log(req.user);
  const allTodos = await db.Todo.findAll({ where: { user_id: req.User.id } });
  res.status(200).send(allTodos);
};

const getTodoById = async (req, res) => {
  console.log(req.user);
  const targetId = req.params.id;
  const targetTodo = await db.Todo.findOne({ where: { id: targetId } });
  res.status(200).send(targetTodo);
};

const createTodo = async (req, res) => {
  const { task } = req.body;
  const newTodo = await db.Todo.create({ task, user_id: req.User.id });
  res.status(201).send(newTodo);
};

const updateTodo = async (req, res) => {
  const targetId = req.params.id;
  const { task } = req.body;
  const targetTodo = await db.Todo.findOne({ where: { id: targetId } });

  if (targetTodo && targetTodo.user_id === req.User.id) {
    await targetTodo.update({ task });
    res.status(200).send({massage: "Todo has boon updated"})
  } else {
    res.status(404).send({massage: "Not found todo"})
  }
};

const deleteTodo = (req, res) => {
  const targetId = req.params.id;
  const targetTodo = await db.Todo.findOne({ where: { id: targetId } });

  if (targetTodo && targetTodo.user_id === req.User.id) {
    await targetTodo.destroy();
    res.status(202).send({ message: `Todo has been deleted.` })
  } else {
    res.status(404).send({ message: `Not found todo` })
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};