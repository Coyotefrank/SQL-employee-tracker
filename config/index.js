// Import and require mysql2
const mysql = require('mysql2');

// Connect to database 
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'department_db'
    },
    console.log(`Connected to the department_db database.`)
  );

  module.exports = db