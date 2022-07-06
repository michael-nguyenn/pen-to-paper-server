const router = require("express").Router();
const templatesController = require("../controllers/templatesController");

router
  .route("/")
  .get(templatesController.index)
  .post(templatesController.addTemplate);

router
  .route("/:id")
  .get(templatesController.singleTemplate)
  .delete(templatesController.deleteTemplate);

module.exports = router;
