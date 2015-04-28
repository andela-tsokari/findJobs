module.exports = (function() {

  'use strict';

  var express = require('express');

  var bodyParser = require('body-parser');

  var app = express();

  var router = express.Router();

  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use('/', router);

  return app;

})();