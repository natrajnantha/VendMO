const router = require("express").Router();
const categoryProcessingController = require("../../controllers/categoryProcessingController");

router.route("/").get(categoryProcessingController.findAll);

module.exports = router;
