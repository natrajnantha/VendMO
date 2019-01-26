const router = require("express").Router();
const orderProcessingController = require("../../controllers/orderProcessingController");
router.route("/shop/:category").get(orderProcessingController.findByCat);
router.route("/count/:id").get(orderProcessingController.getProductCount);
router.route("/:id").get(orderProcessingController.findById);
router.route("/").get(orderProcessingController.findAll);
router.route("/saveorder/").post(orderProcessingController.create);
router.route("/desc/:desc").get(orderProcessingController.getProductsByDesc);
router.route("/custorders/:id").get(orderProcessingController.getCustAllOrders);
router
  .route("/custordersstatsbycat/:id")
  .get(orderProcessingController.getCustOrderStatsbyCat);
router
  .route("/vendororders/:id")
  .get(orderProcessingController.getCustAllOrdersbyVendor);
router
  .route("/vendorordersstatsbycat/:id")
  .get(orderProcessingController.getVendorOrderStatsbyCat);

module.exports = router;
