exports.up = function (knex) {
  return knex.schema
    .createTable("entries", (table) => {
      table.increments("id").primary();
      table.json("content").notNullable();
      table.string("type");
      table.timestamp("date_created").defaultTo(knex.fn.now());
    })
    .createTable("templates", (table) => {
      table.increments("id").primary();
      table.json("content").notNullable();
      table.string("type");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("entries").dropTable("templates");
};
