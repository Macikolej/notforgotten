const routes = (app) => {
  app.get('/', (req, res) => { res.render('home') });
  return app;
};

module.exports = routes;
