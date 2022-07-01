const router = require("express").Router();
const templatesController = require("../controllers/templatesController");

router.route("/").get(templatesController.index);

router.route("/:id").get(templatesController.singleTemplate);

module.exports = router;
