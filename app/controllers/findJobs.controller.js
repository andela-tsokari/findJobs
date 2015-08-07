var urls = require('./../../config/url-config'),
    remoteJobs = require('./../models/findJobs.model')[0],
    sanFranJobs = require('./../models/findJobs.model')[1],
    nyJobs = require('./../models/findJobs.model')[2],
    request = require('request'),
    cheerio = require('cheerio');

var techs, techStr, source, description, $;

techs = ['Ruby', 'Ruby on Rails', 'Rails', 'JavaScript', 'Node', 'NodeJS',
'Angular', 'AngularJS', 'Mongo', 'MongoDB', 'Python', 'MEAN Stack', 'Android',
'iOS', 'Swift', 'PHP', 'Django', 'Clojure', 'Scala'];

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

            source = $$('p.originalPost > a').attr('href');

            description = $$('span.comment').text();

            techStr = [];

            techs.forEach(function(element, index, array) {
              var criteria = new RegExp('(?:\\b)?'+element+'+(?:\\b)?', 'igm');

              if(criteria.test(description) === true) {
                techStr.push(element);

              }

            });

            if (techStr.length > 0) {
              var details = {
                source: source,
                technicalRequirements: techStr.join(', '),
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
                      .then(function(savedJobs) {
                          // console.log(savedJobs);
                        });
                  }
                  else {
                    // console.log(dbJob);
                  }

                });

            }


          });

          remoteJobs
            .fetchAll()
            .then(function(jobs) {
              if(jobs){
                jobs
                  .query('orderBy', 'Job_No', 'asc')
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

            source = $$('p.originalPost > a').attr('href');

            description = $$('span.comment').text();

            techStr = [];

            techs.forEach(function(element, index, array) {
              var criteria = new RegExp('\\b'+element+'\\b', 'igm');

              if(criteria.test(description) === true) {
                techStr.push(element);

              }

            });

            if (techStr.length > 0) {
              var details = {
                source: source,
                technicalRequirements: techStr.join(', '),
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
                      .then(function(savedJobs) {
                          // console.log(savedJobs);
                        });
                  }
                  else {
                    // console.log(dbJob);
                  }

                });

            }


          });

          sanFranJobs
            .fetchAll()
            .then(function(jobs) {
              if(jobs){
                jobs
                  .query('orderBy', 'Job_No', 'asc')
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

            source = $$('p.originalPost > a').attr('href');

            description = $$('span.comment').text();

            techStr = [];

            techs.forEach(function(element, index, array) {
              var criteria = new RegExp('\\b'+element+'\\b', 'igm');

              if(criteria.test(description) === true) {
                techStr.push(element);

              }

            });

            if (techStr.length > 0) {
              var details = {
                source: source,
                technicalRequirements: techStr.join(', '),
                description: description

              };

              newYorkJobs
                .where({Source: details.source})
                .fetch()
                .then(function(dbJob) {
                  if(!dbJob) {
                    newYorkJobs
                      .forge({
                        Source: details.source,
                        Technical_Requirements: details.technicalRequirements,
                        Full_Description: details.description
                      })
                      .save()
                      .then(function(savedJobs) {
                          console.log(savedJobs);
                        });
                  }
                  else {
                    // console.log(dbJob);
                  }

                });

            }

          });

          newYorkJobs
            .fetchAll()
            .then(function(jobs) {
              if(jobs){
                jobs
                  .query('orderBy', 'Job_No', 'asc')
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