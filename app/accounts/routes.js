const passport = require('passport');

const routes = (app) => {
  app.get('/account', passport.authenticationMiddleware(), (req, res) => { console.log('serving /account') });
  return app;
};

module.exports = routes;
