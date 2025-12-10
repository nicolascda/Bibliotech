import mysql2 from 'mysql2/promise';

const db = mysql2.createPool({
  host: '127.0.0.1',
  user: 'bibliodbRoot',
  password: '12345',
  database: 'bibliodb',
  port: 3306,
  connectionLimit: 10
});

export default db;