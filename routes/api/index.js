const router = require("express").Router();
const orderRoutes = require("./order-processing");
const categoryRoutes = require("./category-route");

router.use("/order", orderRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
