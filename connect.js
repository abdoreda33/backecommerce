const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = async (url) => {
  return mongoose.connect(url).then(() => console.log("connection"));
};

module.exports = connectDB;
