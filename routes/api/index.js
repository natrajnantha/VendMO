const router = require("express").Router();
const orderRoutes = require("./order-processing");
const categoryRoutes = require("./category-route");
const userRoutes = require("./userRoutes");
const vendorRoutes = require("./vendorRoutes");

router.use("/order", orderRoutes);
router.use("/category", categoryRoutes);
router.use("/user", userRoutes);
router.use("/vendor", vendorRoutes);

module.exports = router;
