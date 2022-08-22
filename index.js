require("dotenv").config();
require("express-async-errors");
const express = require("express");

const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
const connect = require("./DB/connect");
const port = process.env.PORT || 5000;
const notFoundMiddleware = require("./Middlewares/not_found");
const errorMiddleware = require("./Middlewares/error_handler");
const productRouter = require("./Routes/product");
// const authRouter = require("./routes/authRouter");
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));
const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};
app.get("/", (req, res) => {
  res.send("STORE API");
});

app.use("/api/v1/products/", productRouter);
// app.get("/api/v1/products/", (req, res) => {
//   res.send("products");
// });

start();
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
