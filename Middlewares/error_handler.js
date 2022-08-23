const CustomAPIError = require("../Errors/custom-errors");
const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({
    errors: "Something went wrong , please try again later",
  });
};
module.exports = errorHandlerMiddleware;
