var SequelizeAuto = require("sequelize-auto");
let auto = new SequelizeAuto("testDB", "sa", "reallyStrongPwd123", {
  dialect: "mssql",
  define: {
    timestamps: false,
  },
  host: "localhost",
  dialectOptions: {
    requestTimeout: 50000,
    options: {
      encrypt: true,
    },
  },
  directory: "./models", // prevents the program from writing to disk
  logging: console.log,
  tables: ["dbo.Groups", "dbo.Categories", "dbo.Products"],
});
auto.run(function (err) {
  if (err) throw err;
  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
