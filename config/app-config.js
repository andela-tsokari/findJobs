var express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./../app/routes/findJobs.route');


module.exports = (function() {
  'use strict';

  var app = express();

  var router = express.Router();

  routes(router);

  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use('/', router);

  return app;

})();