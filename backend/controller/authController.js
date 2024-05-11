const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const { generateRefreshToken } = require("../config/refreshToken");

const createUser = async (req, res) => {
    try {
      const userName = req.body.userName;
      const findUser = await User.findOne({ userName });
      if (!findUser) {
        // Create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
      } else {
        // User is already existing
        throw new Error("User already exists");
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
      const { userName, password } = req.body;
      // Check if user already exists
      const findUser = await User.findOne({ userName });
      if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateUser = await User.findByIdAndUpdate(
          findUser._id,
          {
            refreshToken: refreshToken,
          },
          {
            new: true,
          }
        );
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
          _id: findUser?._id,
          firstname: findUser?.firstname,
          lastname: findUser?.lastname,
          email: findUser?.email,
          mobile: findUser?.mobile,
          token: generateToken(findUser?._id),
        });
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

const logout = async (req, res) => {
    try {
      const cookie = req.cookies;
      console.log(cookie);
      if (!cookie?.refreshToken) {
        throw new Error("No Refresh Token in Cookies");
      }
      const refreshToken = cookie.refreshToken;
      const user = await User.findOne({ refreshToken });
      if (!user) {
        res.clearCookie("refreshToken", {
          httpOnly: true,
          secure: true,
        });
        return res.sendStatus(204);
      }
      await User.findOneAndUpdate({ refreshToken }, {
        refreshToken: "",
      });
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
      });
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

const resetPassword = async (req, res) => {
    try {
      const { password } = req.body;
      const token = req.params.token;
      const hashToken = crypto.createHash("sha256").update(token).digest("hex");
      const user = await User.findOne({
        passwordResetToken: hashToken,
        passwordResetExpires: { $gt: Date.now() },
      });
      if (!user) {
        throw new Error("Token expired. Please try again later.");
      }
      user.password = password;
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  
module.exports = {
    createUser,
    loginUser,
    logout,
    resetPassword,
  };
  