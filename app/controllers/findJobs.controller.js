var urls = require('./../../config/url-config'),
    remoteJobs = require('./../models/findJobs.model')[0],
    sanFranJobs = require('./../models/findJobs.model')[1],
    nyJobs = require('./../models/findJobs.model')[2],
    request = require('request'),
    cheerio = require('cheerio');

var techs, techStr, source, description, $;

techs = ['Ruby', 'JS', 'JavaScript', 'Node', 'Angular', 'Mongo', 'Mongodb', 'Python', 'Javascript'];

module.exports = {

  getRemoteJobs: function(req, res) {
    request
      .get({
        url: urls.remote
      },

      function(error, response, html) {
        if(!error) {

          $ = cheerio.load(html);

          $('.pure-u-1, .job-ad').each(function() {

            var job = $(this).html();

            var $$ = cheerio.load(job);

            source = $$('p.job-splitter > a').attr('href');

            description = $$('span.comment').text();

            techStr = '';

            techs.forEach(function(element, index, array) {
              if(description.search(element) !== -1) {
                techStr = techStr + element + ', ';

              }

            });

            var details = {
              source: source,
              technicalRequirements: techStr,
              description: description

            };

            remoteJobs
              .where({Source: details.source})
              .fetch()
              .then(function(dbJob) {
                if(!dbJob) {
                  remoteJobs
                    .forge({
                      Source: details.source,
                      Technical_Requirements: details.technicalRequirements,
                      Full_Description: details.description
                    })
                    .save()
                    .then(function() {
                      // console.log(savedJobs);
                    });
                }
                else {
                  // console.log(savedJobs);
                }

              });


          });

          remoteJobs
            .fetchAll()
            .then(function(jobs) {
              if(jobs){
                jobs
                  .fetch()
                  .then(function(job) {
                    res
                      .json(job.toJSON());
                  });
              }
            });
        }

      });

  },


  getSanFranJobs: function(req, res) {
    request
      .get({
        url: urls.sanFran
      },

      function(error, response, html) {
        if(!error) {

          $ = cheerio.load(html);

          $('.pure-u-1, .job-ad').each(function() {

            var job = $(this).html();

            var $$ = cheerio.load(job);

            source = $$('p.job-splitter > a').attr('href');

            description = $$('span.comment').text();

            techStr = '';

            techs.forEach(function(element, index, array) {
              if(description.search(element) !== -1) {
                techStr = techStr + element + ', ';

              }

            });

            var details = {
              source: source,
              technicalRequirements: techStr,
              description: description

            };

            sanFranJobs
              .where({Source: details.source})
              .fetch()
              .then(function(dbJob) {
                if(!dbJob) {
                  sanFranJobs
                    .forge({
                      Source: details.source,
                      Technical_Requirements: details.technicalRequirements,
                      Full_Description: details.description
                    })
                    .save()
                    .then(function() {
                      // console.log(savedJobs);
                    });
                }
                else {
                  // console.log(savedJobs);
                }

              });


          });

          sanFranJobs
            .fetchAll()
            .then(function(jobs) {
              if(jobs){
                jobs
                  .fetch()
                  .then(function(job) {
                    res
                      .json(job.toJSON());
                  });
              }
            });
        }
      });
  },

  getNewYorkJobs: function(req, res) {
    request
      .get({
        url: urls.newYork
      },

      function(error, response, html) {
        if(!error) {

          $ = cheerio.load(html);

          $('.pure-u-1, .job-ad').each(function() {

            var job = $(this).html();

            var $$ = cheerio.load(job);

            source = $$('p.job-splitter > a').attr('href');

            description = $$('span.comment').text();

            techStr = '';

            techs.forEach(function(element, index, array) {
              if(description.search(element) !== -1) {
                techStr = techStr + element + ', ';

              }

            });

            var details = {
              source: source,
              technicalRequirements: techStr,
              description: description

            };

            nyJobs
              .where({Source: details.source})
              .fetch()
              .then(function(dbJob) {
                if(!dbJob) {
                  nyJobs
                    .forge({
                      Source: details.source,
                      Technical_Requirements: details.technicalRequirements,
                      Full_Description: details.description
                    })
                    .save()
                    .then(function() {
                    });
                }
                else {
                }

              });


          });

          nyJobs
            .fetchAll()
            .then(function(jobs) {
              if(jobs){
                jobs
                  .fetch()
                  .then(function(job) {
                    res
                      .json(job.toJSON());
                  });
              }
            });
        }
      });
  }

};