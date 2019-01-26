const router = require("express").Router();
const vendorController = require("../../controllers/vendorController");

router.route("/saveVorder/").post(vendorController.create);

module.exports = router;
