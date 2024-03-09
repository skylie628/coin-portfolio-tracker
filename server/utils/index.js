const jwt = require("jsonwebtoken");

function generateAccessToken(payload = {}) {
  const result = jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: "30m",
  });
  return result;
}

function generateRefreshToken(payload = {}) {
  const result = jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: "1d",
  });
  return result;
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
