/* jshint indent: 1 */
const Sequelize = require("sequelize");

class Groups extends Sequelize.Model {
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
      },
      {
        tableName: "Groups",
        freezeTableName: true,
        sequelize,
      },
      { timestamps: false }
    );
  }
}
module.exports = function (sequelize) {
  return Groups.init(sequelize, Sequelize);
};
