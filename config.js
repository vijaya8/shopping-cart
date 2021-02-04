module.exports = {
  host: "localhost",
  user: "sa",
  password: "reallyStrongPwd123",
  dbName: "testDB",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
