const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded?.id);
        if (!user) {
          throw new Error("User not found");
        }
        req.user = user;
        next();
      } else {
        throw new Error("Invalid token");
      }
    } else {
      throw new Error("Authorization header is missing or invalid");
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};


module.exports = { authMiddleware };
