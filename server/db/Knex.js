const knex = require('knex');

const connection = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mrcooptask'
    }
  });

  module.exports = connection;