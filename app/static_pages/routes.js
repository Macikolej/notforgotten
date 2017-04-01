const routes = (app) => {
  app.get('/', (req, res) => { console.log('serving /') });
  return app;
};

module.exports = routes;
