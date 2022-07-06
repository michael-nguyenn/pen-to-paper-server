const knex = require("knex")(require("../knexfile").development);

exports.addUser = (req, res) => {
  knex("users")
    .insert(req.body)
    .then((data) => {
      console.log("Users Object:", data);
      res.json({ success: "true" });
    })
    .catch((err) => res.status(400).send(`Error creating User: ${err}`));
};
