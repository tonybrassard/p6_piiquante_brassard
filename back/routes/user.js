const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// Les routes pour le login et le signup
router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;
