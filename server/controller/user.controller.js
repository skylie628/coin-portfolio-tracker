const { createUser, findUser } = require("../service/user.service");
const { generateAccessToken, generateRefreshToken } = require("../utils");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  signup: async (req, res) => {
    try {
      const { email, name, password } = req.body.data;
      const isUserExisted = await findUser(email);
      if (isUserExisted) {
        res.status(400).json({
          msg: "email already exisited",
          isSucess: false,
        });
        return;
      }
      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const user = await createUser({ email, name, password: hashPassword });
      delete user.password;
      res.status(200).json({
        isSuccess: true,
        data: user,
        message: "register account sucessfully",
      });
    } catch (error) {
      res.status(400).json({
        isSuccess: false,
        data: null,
        msg: "unable to register account",
        error,
      });
    }
  },
  signin: async (req, res) => {
    const { email, password } = req.body.data;
    console.log("sign");
    const user = await findUser(email);
    if (!user) {
      res.status(400).json({
        isSuccess: false,
        msg: "Unauthorized information",
      });
      return;
    }
    const isMatchedPassword = await bcrypt.compare(password, user.password);
    if (!isMatchedPassword) {
      res.status(400).json({
        isSuccess: false,
        msg: "Unauthorized information",
      });
      return;
    }
    const payload = {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);
    res.header("x-auth-token", accessToken).json({
      msg: "Login Successfully!",
      isSuccess: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  },
  refreshToken: async (req, res) => {
    const refreshToken = req.body.data || {};
    if (!refreshToken) {
      res.status(401).json({ msg: "Not have cretidental", isSuccess: false });
      return;
    }

    jwt.verify(refreshToken, process.env.SECRET_TOKEN, (error, user) => {
      if (error) {
        console.log(refreshToken);
        res.status(401).json({ msg: "Unauthenticated", isSuccess: false });
        return;
      }
      // if token is verified, provide new accessToken to user
      const accessToken = generateAccessToken({ user });
      res.status(200).json({
        msg: "refresh token successfully",
        isSuccess: true,
        data: {
          accessToken,
        },
      });
      return;
    });
  },
};
