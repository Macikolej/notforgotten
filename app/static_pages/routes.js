const routes = (app) => {
  app.get('/', (req, res) => { res.render('home') });
  app.get('/sign_in', (req, res) => { res.render('sign_in') });
  app.get('/sign_up', (req, res) => { res.render('sign_up') });
  return app;
};

module.exports = routes;
