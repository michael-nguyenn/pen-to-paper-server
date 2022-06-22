exports.up = function (knex) {
  return knex.schema
    .createTable("entries", (table) => {
      table.increments("id").primary();
      table.string("entry").notNullable();
      table.timestamp("date_submitted").defaultTo(knex.fn.now());
    })
    .createTable("template", (table) => {
      table.increments("id").primary();
      table.string("type");
      table.string("content");
      table
        .integer("entries_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("entries")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("entries").dropTable("template");
};
