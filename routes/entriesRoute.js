const router = require("express").Router();
const entriesController = require("../controllers/entriesController");

router.route("/").get(entriesController.index);

module.exports = router;
