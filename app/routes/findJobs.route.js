var jobs = require('./../controllers/findJobs.controller');

module.exports = function(router) {
  'use strict';

  router
    .route('/sanFran')
    .get(jobs.getSanFranJobs);

  router
    .route('/newYork')
    .get(jobs.getNewYorkJobs);

  router
    .route('/remote')
    .get(jobs.getRemoteJobs);

};