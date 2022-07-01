const templateData = require("../seed_data/templates");

exports.seed = function (knex) {
  return knex("templates")
    .del()
    .then(function () {
      return knex("templates").insert(templateData);
    });
};
