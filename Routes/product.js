const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllProductsStatic,
  createProduct,
} = require("../Controllers/product");

router.route("/getallproducts").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);
router.route("/create").get(createProduct);
// router.route("/static").get("/static", (req, res) => {
//   res.send("products");
// });
module.exports = router;
