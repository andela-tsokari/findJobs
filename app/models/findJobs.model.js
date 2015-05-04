var dbConfig = require('./../../config/db-config')[process.env.NODE_ENV];

var knex = require('knex')(dbConfig);

var bookshelf = require('bookshelf')(knex);

knex.schema.hasTable('remote_jobs')
  .then(function (exists) {
    // body...
    if (!exists) {
      bookshelf.knex.schema.createTable('remote_jobs', function(table) {
        table.increments('Job_No').primary();
        table.string('Source').notNullable();
        table.string('Technical_Requirements');
        table.text('Full_Description').notNullable();
        table.timestamp('Retrieved_On');
      })
      .then(function() {
        console.log('Table has been created');
      });
    }
  });

knex.schema.hasTable('san_fran_jobs')
  .then(function (exists) {
    // body...
    if (!exists) {
      bookshelf.knex.schema.createTable('san_fran_jobs', function(table) {
        table.increments('Job_No').primary();
        table.string('Source').notNullable();
        table.string('Technical_Requirements');
        table.text('Full_Description').notNullable();
        table.timestamp('Retrieved_On');
      })
      .then(function() {
        console.log('Table has been created');
      });
    }
  });

knex.schema.hasTable('ny_jobs')
  .then(function (exists) {
    // body...
    if (!exists) {
      bookshelf.knex.schema.createTable('ny_jobs', function(table) {
        table.increments('Job_No').primary();
        table.string('Source').notNullable();
        table.string('Technical_Requirements');
        table.text('Full_Description').notNullable();
        table.timestamp('Retrieved_On');
      })
      .then(function() {
        console.log('Table has been created');
      });
    }
  });

var remoteJob = bookshelf.Model.extend({
    tableName: 'remote_jobs',
    idAttribute: 'Job_No',
    hasTimestamps: ['Retrieved_On']
  });

var sanFranJob = bookshelf.Model.extend({
    tableName: 'san_fran_jobs',
    idAttribute: 'Job_No',
    hasTimestamps: ['Retrieved_On']
  });

var NYJob = bookshelf.Model.extend({
    tableName: 'ny_jobs',
    idAttribute: 'Job_No',
    hasTimestamps: ['Retrieved_On']
  });

module.exports = [remoteJob, sanFranJob, NYJob];