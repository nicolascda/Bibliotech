const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host:'127.0.0.1',
    user:'bibliodbRoot',
    password:'12345',
    database:'bibliodb',
    port:3306,
    connectionLimit: 10
});

module.exports = pool;