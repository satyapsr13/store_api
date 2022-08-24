const express = require("express");
const { login, dashBoard } = require("../Controllers/auth");
const authenticationMiddleware = require("../Middlewares/auth");
const router = express.Router();
router.route("/login").get(login);
router.route("/dashboard").get(authenticationMiddleware, dashBoard);
module.exports = router;
