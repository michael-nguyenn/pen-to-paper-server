const templateData = require("../seed_data/templates");
const entriesData = require("../seed_data/entries");

exports.seed = function (knex) {
  return knex("templates")
    .del()
    .then(function () {
      return knex("templates").insert(templateData);
    })
    .then(() => {
      return knex("entries").del();
    })
    .then(function () {
      return knex("entries").insert(entriesData);
    });
};
