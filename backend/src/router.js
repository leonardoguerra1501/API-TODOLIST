const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/', (_req,res) => {
  res.status(200).send('olá o router funfo');
});

router.get('/tasks',tasksController.getAll);
router.post('/tasks',tasksMiddleware.validateBody,tasksController.createTask);


module.exports = router;