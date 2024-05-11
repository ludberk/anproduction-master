const express = require("express");
const {
  createUser,
  loginUser,
  logout,
  resetPassword,
} = require("../controller/authController");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.put("/reset-password/:token", resetPassword);

module.exports = router;