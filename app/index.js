const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const sassMiddleware = require('node-sass-middleware');
const MySQLStore = require('express-mysql-session')(session);
const routes = require('./routes');
const config = require('../config');

require('./authentication').init();
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(session({
  key: config.session.key,
  secret: config.session.secret,
  store: new MySQLStore(config.mysql),
  resave: true,
  saveUninitialized: true,
}));

app.use(sassMiddleware({
  src: path.join(__dirname, 'stylesheets'),
  dest: path.join(__dirname, '../assets'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/assets'
}));

app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', expressHandlebars({ defaultLayout: 'default' }));
app.set('view engine', 'handlebars');

app.use('/assets', express.static(path.join(__dirname, '../assets')));

app = routes(app);
module.exports = app;
