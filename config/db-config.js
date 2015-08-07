module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'tams',
      database: 'jobs'
    },
    debug: false,
  },

  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'tams',
      database: 'jobs-test'
    },
    debug: true,
  },

  production: {
    client: 'pg',
    connection: {
      host: 'ec2-54-243-187-196.compute-1.amazonaws.com',
      user: 'smctxczyocpdxu',
      database: 'd11sd9hthctjm',
      port: 5432,
      password: 'VxWcYWPjM-QhMk8q7XWW17payu'
    }
  }

};
