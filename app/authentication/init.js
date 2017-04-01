const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Account = require('../accounts').model;
const authenticationMiddleware = require('./middleware');

const init = () => {
  passport.use(new LocalStrategy((accountName, password, done) => {
    Account.findBy({ accountName, password }, (err, account) => {
      if (err) {
        return done(err);
      }
      if (!account) {
        return done(null, false);
      }
      if (password !== account.password) {
        return done(null, false);
      }
      return done(null, account);
    });
  }));
  passport.authenticationMiddleware = authenticationMiddleware;
};

module.exports = init;
