const path = require('path');

const routes = (app) => {
  app = require('./static_pages').routes(app);
  app = require('./accounts').routes(app);
  app.get(/^(.+)$/, function(req, res) {
    console.log('static file request : ' + req.params[0]);
    res.sendFile(path.join(__dirname, '../assets', req.params[0]));
  });
  return app;
}

module.exports = routes;
