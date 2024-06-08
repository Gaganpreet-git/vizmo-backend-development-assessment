const { authService, userService, tokenService } = require("../services");
const catchAsync = require("../utils/CatchAsync");

const register = async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(201).send({ user, tokens });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(200).json({ user, tokens });
};

module.exports = {
  register: catchAsync(register, login),
  login: catchAsync(login),
};
