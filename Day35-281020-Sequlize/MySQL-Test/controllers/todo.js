const db = require('../models/index');

const getAllTodos = async (req, res) => {
  // GET ALL TODOS
  const allTodos = await db.Todo.findAll();
  res.status(200).send(allTodos);
};

const getTodoById = async (req, res) => {
  // GET SEARCH TODO
  const targetId = req.params.id;
  const targetTodo = await db.Todo.findOne({ where: { id: targetId } });
  res.status(200).send(targetTodo);
};

const createTodo = async (req, res) => {
  //CREATE TODOS
  const { task, person_id } = req.body;
  const newTodo = await db.Todo.create({ task, person_id });
  res.status(201).send(newTodo);
};

const updateTodo = async (req, res) => {
  //UPDATE TODOS
  const targetId = req.params.id;
  const { task, person_id } = req.body;
  const targetTodo = await db.Todo.findOne({ where: { id: targetId } });

  if (targetTodo) {
    await targetTodo.update({ task, person_id });
    //ต้องมี await ไม่งั้นถ้าเกิด error ก็จะไม่รู้เพราะโปรแกรมก็ run ว่า updeted แล้วอยู่ดี 
    // ปกติ async-await ๕รใช้คู่กับ try-catch ครอบเพื่อตรวจจับ error
    res.status(200).send({ message: `Todo ID ${targetId} has been updated.` })
  } else {
    res.status(404).send({ message: `Not found ID: ${targetId}` })
  }
};

const deleteTodo = async (req, res) => {
  //DELETE TODOS
  const targetId = req.params.id;
  const targetTodo = await db.Todo.findOne({ where: { id: targetId } });

  if (targetTodo) {
    await targetTodo.destroy();
    //ต้องมี await ไม่งั้นถ้าเกิด error ก็จะไม่รู้เพราะโปรแกรมก็ run ว่า deleted แล้วอยู่ดี
    res.status(202).send({ message: `Todo ID ${targetId} has been deleted.` })
  } else {
    res.status(404).send({ message: `Not found ID: ${targetId}` })
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};