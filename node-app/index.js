const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

app.get('/', (req, res) => {
  // Consulta a lista de nomes
  const selectSql = 'SELECT name FROM people';
  connection.query(selectSql, (err, results) => {
    if (err) throw err;
    let response = '<h1>Full Cycle Rocks!</h1><ul>';
    results.forEach(row => {
      response += `<li>${row.name}</li>`;
    });
    response += '</ul>';
    res.send(response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
