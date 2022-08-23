const CustomAPIError = require("../Errors/custom-errors");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({
    iam: " Fake login or signUp",
    token: token,
  });
};
const dashBoard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startWith("Bearer ")) {
    throw new CustomAPIError(
      "No token provider!. Token should start with Bearer ",
      400
    );
  }
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: `Fake dashboard login or signUp and your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashBoard,
};
