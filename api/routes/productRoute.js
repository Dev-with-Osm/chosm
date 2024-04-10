const express = require("express");
const {
  addProduct,
  getAllProducts,
} = require("../controllers/productController");

const router = express.Router();

router.post("/add-product", addProduct);
router.get("/get-products", getAllProducts);

module.exports = router;
