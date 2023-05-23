const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'informatica12345',
  database: 'Jobs'
});

connection.connect((error : string) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos!');
});

module.exports = connection;
