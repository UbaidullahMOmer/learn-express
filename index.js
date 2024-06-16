const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from node api nodemon");
})

app.post("/api/products", async (req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch(err) {
    res.status(500).json({message: err.message})
  }
})

mongoose.connect("mongodb+srv://researchfigma:qdTYAHzs5CRo65f8@backenddb.afhvqcp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
  console.log("Connect to Database");
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
})
.catch((err) => {
  console.log("Connection failed!", err);
})