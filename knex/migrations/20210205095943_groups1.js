exports.up = function (knex) {
  return knex.schema.createTable("groups1", (tbl) => {
    tbl.increments().unsigned().primary();
    tbl.string("name").notNullable();
    tbl.string("description").notNullable();
    tbl.boolean("isActive").notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("groups1");
};
