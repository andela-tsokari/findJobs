var app = require('./config/app-config');

var port = require('./config/port');

app
  .listen(port, function() {
    console.log('Job-Finder App listening on Port: ' + port);
  });