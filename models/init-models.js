var DataTypes = require("sequelize").DataTypes;
var _Categories = require("./Categories");
var _Groups = require("./Groups");
var _Products = require("./Products");

function initModels(sequelize) {
  var Categories = _Categories(sequelize, DataTypes);
  var Groups = _Groups(sequelize, DataTypes);
  var Products = _Products(sequelize, DataTypes);

  Categories.belongsTo(Groups, { as: "group", foreignKey: "groupId"});
  Groups.hasMany(Categories, { as: "Categories", foreignKey: "groupId"});
  Products.belongsTo(Categories, { as: "category", foreignKey: "categoryId"});
  Categories.hasMany(Products, { as: "Products", foreignKey: "categoryId"});

  return {
    Categories,
    Groups,
    Products,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
