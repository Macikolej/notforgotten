const passport = require('passport');
const { create } = require('./actions');

const routes = (app) => {
  app.get('/characters/new', passport.authenticationMiddleware(), (req, res) => res.render('new_character'));
  app.post('/characters', passport.authenticationMiddleware(), create);
  return app;
};

module.exports = routes;
