const DB = require('../services').DB;

class Character {
  static forAccount(id, callback) {
    DB.connection.query(
      'SELECT * FROM players WHERE account_id = ?',
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error, null);
        }
        return callback(null, results);
      }
    );
  }
}

module.exports = Character;
