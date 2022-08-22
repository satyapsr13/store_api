const mongoose = require("mongoose");
const connectDB = (url) => {
  return mongoose.connect(url, {
    // userNewUrlParser: true,
    // useCurrentIndex: true,
    // useFindAndModify: true,
    // useUnifiedTopology: true,
  });
};
module.exports = connectDB;
