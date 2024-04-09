const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;

// Connect to MongoDB database using Mongoose
const uri =
  "mongodb+srv://khourssaoussama7:Ot4ar5QDXhfKX1n7@cluster0.s2tixsp.mongodb.net/chosm";

mongoose.connect(uri).then(() => {
  console.log(`Connected successfully to server`);
});

app.get("/test", (req, res) => {
  res.json("Hello World!");
});

app.post("/add-product", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json("New product added!");
  } catch (error) {
    res.json(error);
  }
});

app.get("/get-products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// api side port
app.listen(port, () => {
  console.log("Server is running on Port ", port);
});
