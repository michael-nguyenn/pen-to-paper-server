exports.up = function (knex) {
  return knex.schema.createTable("entries", (table) => {
    table.increments("id").primary();
    table.string("content").notNullable();
    table.string("type");
    table.timestamp("date_created").defaultTo(knex.fn.now());
    table.boolean("is_template").defaultTo(0).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("entries");
};
