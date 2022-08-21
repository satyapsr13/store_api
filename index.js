require("dotenv").config();
const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");

const port = process.env.PORT || 5000;
const notFoundMiddleware = require("./Middlewares/not_found");
const errorMiddleware = require("./Middlewares/error_handler");
// const authRouter = require("./routes/authRouter");
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app
  .get("/", (req, res) => {
    res.send("STORE API");
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
//   .use(notFoundMiddleware);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
