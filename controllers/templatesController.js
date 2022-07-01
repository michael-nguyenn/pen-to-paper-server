const knex = require("knex")(require("../knexfile").development);

exports.index = (_req, res) => {
  knex("templates")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Templates: ${err}`);
    });
};

exports.singleTemplate = (req, res) => {
  knex("templates")
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res
          .status(404)
          .send(`Record with id: ${req.params.id} is not found`);
      }

      res.status(200).json(data[0]);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving template ${req.params.id} ${err}`);
    });
};
