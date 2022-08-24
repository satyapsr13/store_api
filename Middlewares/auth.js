const CustomAPIError = require("../Errors/custom-errors");
const jwt = require("jsonwebtoken");
const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  //   throw new CustomAPIError("Not authorized access to this route!", 400);

  if (!authHeader || authHeader.split(" ")[0] !== "Bearer") {
    throw new CustomAPIError(
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
    // res.status(200).json({
    //   username: `Here is your authorized dashboard ${decoded.username}`,

    // });
    next();
  } catch (error) {
    throw new CustomAPIError("1Not authorized access to this route!", 400);
  }
};
module.exports = authenticationMiddleware;
