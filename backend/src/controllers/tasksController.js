const tasksModel = require('../models/tasksModels');

const getAll = async (_req,res) => {

  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (req, res)=> {
  const createTask = await tasksModel.createTaks(req.body);
  return res.status(201).json(createTask);
};

const deleteTask = async (req,res) => {
  const {id} = req.params;
  await tasksModel.deleteTask(id);
  return res.status(204).json();
};



module.exports = {
  getAll,
  createTask,
  deleteTask,
};