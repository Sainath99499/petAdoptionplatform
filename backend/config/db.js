const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME || "petAdoptionDB",
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("Mongo error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

