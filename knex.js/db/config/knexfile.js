// Update with your config settings.

const path = require('path');


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'knex',
      user:     'postgres',
      password: 'shifa'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: '../migrations',
      tableName: 'knex_migrations'
    }
  }
};
