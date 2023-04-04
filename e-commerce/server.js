const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("My app is app");
});

app.listen(PORT, () => {
  console.log("Server is listening at port ", PORT);
});
