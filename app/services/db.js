const mysql = require('mysql');
const config = require('../../config');

const connection = mysql.createConnection(config.mysql);
connection.connect();

module.exports = { connection, mysql }
