exports.up = function (knex) {
  return knex.schema
    .createTable("categories1", (tbl) => {
      //tbl.increments("id").primary().unsigned();
      //tbl.increments();
      tbl.increments().unsigned().primary();
      tbl.string("name").notNullable();
      tbl.string("description").notNullable();
      tbl.boolean("isActive").notNullable().defaultTo(false);
      tbl.integer("group_id").unsigned().references("groups1.id");
    })
    .then(() => {
      return knex.schema.createTable("products1", (tbl) => {
        //tbl.increments("id").primary().unsigned();
        // tbl.increments();
        tbl.increments().unsigned().primary();
        tbl.string("name").notNullable();
        tbl.string("description").notNullable();
        tbl.string("image_url", knex.raw("max")).nullable();
        tbl.boolean("isActive").notNullable().defaultTo(false);
        tbl.integer("categoryId").unsigned().references("categories1.id");
      });
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("categories1").dropTable("products1");
};
