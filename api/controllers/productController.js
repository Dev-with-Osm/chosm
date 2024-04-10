const Product = require("../models/Product.js");

const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json({ message: "New product added!", data: newProduct });
  } catch (error) {
    res.json(error);
  }
};

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

module.exports = { addProduct, getAllProducts };
