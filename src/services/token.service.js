const jwt = require("jsonwebtoken");
const config = require("../config/index");
const tokenTypes = require("../config/tokenTypes");

const generateToken = (userId, expires, type, secret = config.jwt.secret) => {
  const payload = {
    sub: userId,
    type: type,
    exp: expires,
    iat: Date.now() / 1000,
  };
  const jwtToken = jwt.sign(payload, secret);
  return jwtToken;
};

const generateAuthTokens = async (user) => {
  const expires =
    Math.floor(Date.now() / 1000) + config.jwt.accessExpirationMinutes * 60;
  const accessToken = generateToken(user.id, expires, tokenTypes.ACCESS);
  return {
    access: {
      token: accessToken,
      expires: new Date(expires * 1000),
    },
  };
};

module.exports = {
  generateToken,
  generateAuthTokens,
};
