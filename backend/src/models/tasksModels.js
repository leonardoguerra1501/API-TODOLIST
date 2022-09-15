const connection = require('./connection');

const getAll = async () => {
  const tasks = await connection.execute('SELECT * FROM TASKS');
  return tasks;
};

module.exports = {
  getAll
};