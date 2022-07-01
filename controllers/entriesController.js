const knex = require("knex")(require("../knexfile").development);

exports.index = (_req, res) => {
  knex("entries")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Entries: ${err}`);
    });
};

exports.singleEntry = (req, res) => {
  knex("entries")
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res
          .status(404)
          .send(`Record with id: ${req.params.id} is not found`);
      }

      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving warehouse ${req.params.id} ${err}`)
    );
};

exports.addEntry = (req, res) => {
  // !req.body.entry
  //   ? res.status(400).send("Please fill out the entry") :
  knex("entries")
    .insert(req.body)
    .then((data) => {
      const newEntryURL = `/entries/${data[0]}`;
      res.status(201).location(newEntryURL).send(newEntryURL);
    })
    .catch((err) => res.status(400).send(`Error creating Entry: ${err}`));
};

exports.deleteEntry = (req, res) => {
  knex("entries")
    .delete()
    .where({ id: req.params.id })
    .then(() => {
      res.status(204).send(`Entry with id: ${req.params.id} has been deleted`);
    })
    .catch((err) =>
      res.status(400).send(`Error deleting Entry ${req.params.id} ${err}`)
    );
};

exports.updateEntry = (req, res) => {
  !req.body.entry
    ? res.status(400).send("Please fill out the entry")
    : knex("entries")
        .update(req.body)
        .where({ id: req.params.id })
        .then(() => {
          res
            .status(200)
            .send(`Warehouse with id: ${req.params.id} has been updated`);
        })
        .catch((err) =>
          res
            .status(400)
            .send(`Error updated Warehouse ${req.params.id} ${err}`)
        );
};
