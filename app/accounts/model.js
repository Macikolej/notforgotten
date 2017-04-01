const DB = require('../services').DB;

class Account {
  static findByAccountName(accountName, callback) {
    DB.connection.query(
      'SELECT * FROM accounts WHERE name = ?',
      [accountName],
      (error, results, fields) => {
        if (error) {
          return callback(error, null);
        }
        return callback(null, results[0]);
      }
    );
  }

  static find(id, callback) {
    DB.connection.query(
      'SELECT * FROM accounts WHERE id = ?',
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error, null);
        }
        return callback(null, results[0]);
      }
    );
  }
}

module.exports = Account;
