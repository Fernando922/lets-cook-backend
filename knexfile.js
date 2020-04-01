// created with npx knex init
/**
 * you need to add where is your database and migrations
 */
const path = require('path')
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true, // always add this line
  },

  // database only for tests (you need to create this)
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true, // always add this line
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, '/src/database/migrations'),
    },
  },
}
