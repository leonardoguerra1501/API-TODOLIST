const { response } = require('express');
const express = require ('express');

const app = express();

app.get('/', (req,res) => {
    res.status(200).send('olá mundo')
})

app.listen(3333, () => {
    console.log('server is runing')
    console.log("tteste")
});