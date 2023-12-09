const express = require("express");
const {
  signup,
  signin,
  refreshToken,
} = require("../controller/user.controller");
const userRouter = express.Router();
userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.post("/refreshToken", refreshToken);
module.exports = userRouter;
