const jwt = require("jsonwebtoken");

function generateAccessToken(payload = {}) {
  const result = jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: "1m",
  });
  return result;
}

function generateRefreshToken(payload = {}) {
  const result = jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: 3600,
  });
  return result;
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
