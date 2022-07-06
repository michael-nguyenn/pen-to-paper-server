exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("username");
      table.string("password");
    })
    .createTable("entries", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.json("content").notNullable();
      table.timestamp("date_created").defaultTo(knex.fn.now());
      // table
      //   .integer("users_id")
      //   .unsigned()
      //   .notNullable()
      //   .references("id")
      //   .inTable("users")
      //   .onUpdate("CASCADE")
      //   .onDelete("CASCADE");
    })
    .createTable("templates", (table) => {
      table.string("title");
      table.increments("id").primary();
      table.json("content").notNullable();
      table.string("type");
      // table
      //   .integer("users_id")
      //   .unsigned()
      //   .notNullable()
      //   .references("id")
      //   .inTable("users")
      //   .onUpdate("CASCADE")
      //   .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("users")
    .dropTable("entries")
    .dropTable("templates");
};
