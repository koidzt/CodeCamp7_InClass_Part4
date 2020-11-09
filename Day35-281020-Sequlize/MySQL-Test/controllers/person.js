const db = require('../models/index');

const getAllPersons = async (req, res) => {
  const allPersons = await db.Person.findAll({ include: [db.Todo] });
  res.status(200).send(allPersons);
};

const getPersonById = async (req, res) => {
  const targetId = req.params.id;
  const tergetPerson = await db.Person.findOne({ where: { id: targetId }, include: [db.Todo] });
  res.status(200).send(tergetPerson);
};

const createPerson = async (req, res) => {
  const { name, age, todoss } = req.body;
  const newPerson = await db.Person.create({
    name,
    age,
    Todos: todoss
  }, {
    include: [db.Todo]
  });
  res.status(200).send(newPerson);
};

const updatePerson = async (req, res) => {
  const targetId = req.params.id;
  const { name, age } = req.body;
  const targetPerson = await db.Person.findOne({ where: { id: targetId } });

  if (targetPerson) {
    targetPerson.update({ name, age });
    res.status(200).send({ message: `Todo ID ${targetId} has been updated.` });
  } else {
    res.status(204).send({ message: `Not found ID: ${targetId}` });
  }
};

const deletePerson = async (req, res) => {
  const targetId = req.params.id;
  const targetPerson = await db.Person.findOne({ where: { id: targetId } });

  if (targetPerson) {
    targetPerson.destroy();
    res.status(204).send({ message: `Todo ID ${targetId} has been deleted.` });
  } else {
    res.status(204).send({ message: `Not found ID: ${targetId}` });
  }
};

module.exports = {
  getAllPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson
}