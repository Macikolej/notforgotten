class Account {
  static findBy(params, callback) {
    return callback(null, {
      id: 1,
      name: 'test',
      password: 'test',
    });
  }

  static find(id, callback) {
    return callback(null, {
      id: 1,
      name: 'test',
      password: 'test',
    });
  }
}

module.exports = Account;
