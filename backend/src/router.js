const express = require('express');
const tasksController = require('./controllers/tasksController');

const router = express.Router();

router.get('/', (req,res) => {
  res.status(200).send('olá o router funfo');
});

router.get('/tasks',tasksController.getAll);
router.post('/tasks',tasksController.createTask);

module.exports = router;