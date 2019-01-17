const router = require("express").Router();
const orderProcessingController = require("../../controllers/orderProcessingController");

router.route("/").get(orderProcessingController.findAll);
router.route("/shop/:category").get(orderProcessingController.findByCat);
router.route("/:id").get(orderProcessingController.findById);
router.route("/saveorder/").post(orderProcessingController.create);

module.exports = router;
