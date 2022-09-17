const { response } = require('express');
const tasksModel = require('../models/tasksModels');

const getAll = async (_req,res) => {

  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (req, res)=> {
  const createTask = await tasksModel.createTaks(req.body);
  return res.status(201).json(createTask);
};

module.exports = {
  getAll,
  createTask
};