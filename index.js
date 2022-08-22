require("dotenv").config();
const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
const connect = require("./DB/connect");
const port = process.env.PORT || 5000;
const notFoundMiddleware = require("./Middlewares/not_found");
const errorMiddleware = require("./Middlewares/error_handler");
// const authRouter = require("./routes/authRouter");
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const start = async () => {
  // try {
  //   await connect();
  //   console.log("connected to db");
  //   app.listen(port, () => {
  //     console.log(`server started on port ${port}`);
  //   }).on("error", (err) => {
  //     console.log(err);
  //   }).on("listening", () => {
  //     console.log(`server started on port ${port}`);
  //   }).on("close", () => {
  //     console.log("server closed");
  //   }).on("connection", () => {
  //     console.log("connection");
  //   }).on("disconnect", () => {
  //     console.log("disconnect");
  //   }).on("error", (err) => {
  //     console.log(err);
  //   });
  // }
  // .catch(e => {
  //         console.log(e);
  //         res.status(400).json({
  //             error: e
  //         });
  //     });
  try {
    await connect(process.env.MONGO_URI);
    console.log("connected to db");
  } catch (error) {}
};
app.get("/", (req, res) => {
  
  res.send("STORE API");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//   .use(notFoundMiddleware);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
