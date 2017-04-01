const express = require('express');
const passport = require('passport');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const routes = require('./routes');
const config = require('../config');

require('./authentication').init();
let app = express();

app.use(session({
  key: config.session.key,
  secret: config.session.secret,
  store: new MySQLStore(config.mysql),
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
app = routes(app);
module.exports = app;
