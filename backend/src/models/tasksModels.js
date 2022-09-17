const connection = require('./connection');

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM TASKS');
  return tasks;
};

const createTaks = async (task)=> {

  const{title} = task;
  const dateUtc =  new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO TASKS (title,status,created_at) values (?,?,?)'; 
  const [createdTask] = await connection.execute(query,[title,'pendente',dateUtc]);

  return {insertID: createdTask.insertId};

};

module.exports = {
  getAll,
  createTaks,
};