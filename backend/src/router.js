const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  res.status(200).send('olá o router funfo');
});

router.get('/task',(req,res) => {
  res.status(200).send('descobriu uma rota nova');
});

module.exports = router;