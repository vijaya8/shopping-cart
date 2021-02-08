// Update with your config settings.

module.exports = {
  development: {
    client: "mssql",
    connection: {
      database: "testDB",
      user: "sa",
      password: "reallyStrongPwd123",
      server: "localhost",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      //tableName: "groups1",
      directory: "./knex/migrations",
    },
    seeds: { directory: "./knex/seeds" },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      //tableName: "./knex/migrations",
      directory: "./knex/migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      //tableName: "./knex/migrations",
      directory: "./knex/migrations",
    },
  },
};
