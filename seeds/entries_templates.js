const entriesData = require("../seed_data/entries");

exports.seed = function (knex) {
  return knex("entries")
    .del()
    .then(function () {
      return knex("entries").insert(entriesData);
    });
};
