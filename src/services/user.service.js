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

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(200, "User not found");
  }
  return user;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(200, "User not found");
  }
  return user;
};

module.exports = { saveUser, getUserByEmail, getUserById };
