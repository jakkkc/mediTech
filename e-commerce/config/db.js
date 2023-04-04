const mongoose = require("mongoose");
const config = require("./keys");
const db = config.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      unCreateIndex: true,
    });
    console.log("Connected to db");
  } catch (err) {
    console.log("Connection failed");
    process.exit(1);
  }
};

module.exports = connectDB;
