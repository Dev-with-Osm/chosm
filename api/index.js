const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product.js");
const productRouter = require("./routes/productRoute.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB database using Mongoose
const uri =
  "mongodb+srv://khourssaoussama7:Ot4ar5QDXhfKX1n7@cluster0.s2tixsp.mongodb.net/chosm";

mongoose.connect(uri).then(() => {
  console.log(`Connected successfully to server`);
});

app.get("/test", (req, res) => {
  res.json("Hello World!");
});

app.use("/api/product", productRouter);

// api side port
app.listen(4100, () => {
  console.log("Server is running on Port 4100");
});
