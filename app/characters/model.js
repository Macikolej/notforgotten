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

  static create(accountId, name, gender, callback) {
    const character = {
      name,
      sex: gender === 'female' ? 0 : 1,
      account_id: accountId,
      cap: 100,
      town_id: 1,
      conditions: '',
    }
    DB.connection.query(
      'INSERT INTO players SET ?',
      character,
      (error, results, fields) => {
        if (error) {
          return callback(error, null);
        }
        return callback(null, results[0]);
      }
    )
  }
}

module.exports = Character;
