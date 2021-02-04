const dbConfig = require("../config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.dbName,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    define: {
      timestamps: false,
    },
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.groups = require("./Groups.js")(sequelize, Sequelize);
db.products = require("./Products.js")(sequelize, Sequelize);

module.exports = db;
