const knex = require("knex")(require("../knexfile").development);
const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");

exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  knex("users")
    .where({ username: username })
    .then((data) => {
      if (data.length === 0) {
        res.json({
          token: "",
          error: {
            message: "Error logging in. Invalid Username.",
          },
        });
      } else if (data[0].password === password) {
        console.log("found user:", username);
        res.json({
          token: jwt.sign({ name: username }, SECRET_KEY),
        });
      } else {
        res.json({
          token: "",
          error: {
            message: "Error logging in. Invalid Password.",
          },
        });
      }
    });
};
