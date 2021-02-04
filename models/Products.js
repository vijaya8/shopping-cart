/* jshint indent: 1 */
const Sequelize = require("sequelize");

class Products extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        isactive: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        imageUrl: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        price: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        size: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Categories",
            key: "ID",
          },
        },
      },
      {
        tableName: "Products",
        freezeTableName: true,
        sequelize,
      },
      { timestamps: false }
    );
  }
}
module.exports = function (sequelize) {
  return Products.init(sequelize, Sequelize);
};
