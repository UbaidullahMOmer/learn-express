const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from node api nodemon");
})


mongoose.connect("mongodb+srv://researchfigma:Pu6WiSr49RMR0PIx@bookeshdb.y5osrdm.mongodb.net/?retryWrites=true&w=majority&appName=BookeshDB")
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.log(err);
})