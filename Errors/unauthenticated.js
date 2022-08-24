const CustomAPIError = require("../Errors/custom-errors");

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}
module.exports = UnAuthenticatedError;
