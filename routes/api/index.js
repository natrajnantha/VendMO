const router = require("express").Router();
const orderRoutes = require("./order-processing");
const categoryRoutes = require("./category-route");
const userRoutes = require("./userRoutes");

router.use("/order", orderRoutes);
router.use("/category", categoryRoutes);
router.use("/user", userRoutes);

module.exports = router;
