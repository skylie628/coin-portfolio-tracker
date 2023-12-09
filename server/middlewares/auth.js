const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  const accessToken = req.header("x-auth-token");
  if (!accessToken) {
    res.status(403).json({
      isSuccess: false,
      msg: "Access Denied",
    });
    return;
  }
  try {
    const decode = jwt.verify(accessToken, process.env.SECRET_TOKEN);
    req.user = decode;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).json({
      isSuccess: false,
      msg: "Invalid Token",
    });
    return;
  }
};
