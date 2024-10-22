const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connect to Mongodb Database sucessfully ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`);
  }
};
module.exports = connectDB;
