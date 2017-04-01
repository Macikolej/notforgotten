const path = require('path');

const routes = (app) => {
  app = require('./static_pages').routes(app);
  app = require('./accounts').routes(app);
  return app;
}

module.exports = routes;
