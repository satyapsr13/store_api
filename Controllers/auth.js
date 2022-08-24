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
  try {
    res.status(200).json({
      user: `${req.user.username}`,
    });
  } catch (error) {
    throw new CustomAPIError("Not authorized access to this route!", 400);
  }
};

module.exports = {
  login,
  dashBoard,
};
