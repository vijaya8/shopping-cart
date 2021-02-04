/* jshint indent: 1 */
const Sequelize = require("sequelize");

class Categories extends Sequelize.Model {
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
        groupId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Groups",
            key: "ID",
          },
        },
      },
      {
        tableName: "Categories",
        freezeTableName: true,
        sequelize,
      },
      { timestamps: false }
    );
  }
}
module.exports = function (sequelize) {
  return Categories.init(sequelize, Sequelize);
};
