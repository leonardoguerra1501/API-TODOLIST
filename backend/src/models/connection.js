const mysql = require ('mysql/promise');

const connection = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: ''
});

module.exports = this;