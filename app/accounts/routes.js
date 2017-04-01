const passport = require('passport');
const { sign_in, sign_up } = require('./actions');

const routes = (app) => {
  app.get('/account', passport.authenticationMiddleware(), (req, res) => { res.render('character_list') });
  app.post('/sign_in', passport.authenticate('local', { failureRedirect: '/sign_in' }), sign_in);
  app.post('/sign_up', sign_up);
  return app;
};

module.exports = routes;
