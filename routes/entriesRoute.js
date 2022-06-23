const router = require("express").Router();
const entriesController = require("../controllers/entriesController");

router
  .route("/")
  .get(entriesController.index)

  .post(entriesController.addEntry);

router
  .route("/:id")
  .get(entriesController.singleEntry)
  .delete(entriesController.deleteEntry)
  .patch(entriesController.updateEntry);

module.exports = router;
