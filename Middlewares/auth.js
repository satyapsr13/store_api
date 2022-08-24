const { UnAuthenticatedError } = require("../Errors/index");

const jwt = require("jsonwebtoken");
const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  //   throw new CustomAPIError("Not authorized access to this route!", 400);

  if (!authHeader || authHeader.split(" ")[0] !== "Bearer") {
    throw new UnAuthenticatedError(
      "No token provider!. Token should start with Bearer ",
      400
    );
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { id, username } = decoded;
    req.user = { id, username };
    console.log(req.user);

    next();
  } catch (error) {
    throw new UnAuthenticatedError("Not authorized access to this route!", 400);
  }
};
module.exports = authenticationMiddleware;
