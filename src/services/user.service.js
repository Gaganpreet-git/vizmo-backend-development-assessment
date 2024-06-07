const User = require("../models/User.model");

const saveUser = async (user) => {
  // check if user already exists
  const user = User.isEmailTaken(user.email);

  if (user) {
    throw new ApiError(200, "User already registered");
  }
  const user = await User.create(userBody);
  return user;
};

module.exports = { saveUser };
