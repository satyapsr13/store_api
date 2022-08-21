const errorHandlerMiddleware = async (err, req, res, next) => {
  //   if (err.name === "ValidationError") {
  //     const errors = Object.values(err.errors).map((error) => error.message);
  //     return res.status(400).json({
  //       errors,
  //     });
  //   }
  //   if (err.name === "JsonWebTokenError") {
  //     return res.status(401).json({
  //       errors: [err.message],
  //     });
  //   }
  //   if (err.name === "TokenExpiredError") {
  //     return res.status(401).json({
  //       errors: [err.message],
  //     });
  //   }
  //   if (err.name === "UnauthorizedError") {
  //     return res.status(401).json({
  //       errors: [err.message],
  //     });
  //   }
  //   if (err.name === "ForbiddenError") {
  //     return res.status(403).json({
  //       errors: [err.message],
  //     });
  //   }
  //   if (err.name === "NotFoundError") {
  //     return res.status(404).json({
  //       errors: [err.message],
  //     });
  //   }
  //   if (err.name === "BadRequestError") {
  //     return res.status(400).json({
  //       errors: [err.message],
  //     });
  //   }
  //   if (err.name === "ConflictError") {
  //     return res.status(409).json({
  //       errors: [err.message],
  //     });
  //   }
  //   if (err.name === "ServerError") {
  //     return res.status(500).json({
  //       errors: [err.message],
  //     });
  //     }

  return res.status(500).json({
    errors: "Something went wrong , please try again later",
  });
};
module.exports = errorHandlerMiddleware;
