const passport = require('passport');
const crypto = require('crypto');
const LocalStrategy = require('passport-local').Strategy;
const Account = require('../accounts').model;
const authenticationMiddleware = require('./middleware');

passport.serializeUser((account, callback) => {
  callback(null, account.id);
});

passport.deserializeUser((id, callback) => {
  Account.find(id, (err, account) => {
    if (err) {
      return callback(err);
    }
    callback(null, account);
  });
});

const init = () => {
  passport.use(new LocalStrategy({
    usernameField: 'account_name',
  }, (accountName, password, done) => {
    Account.findByAccountName(accountName, (err, account) => {
      if (err) {
        return done(err);
      }
      if (!account) {
        return done(null, false);
      }
      if (crypto.createHash('sha1').update(password).digest('hex') !== account.password) {
        return done(null, false);
      }
      return done(null, account);
    });
  }));
  passport.authenticationMiddleware = authenticationMiddleware;
};

module.exports = init;
