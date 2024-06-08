const User = require("../models/User.model");
const ApiError = require("../utils/ApiError");

const createUser = async (userData) => {
  // check if user already exists
  const existingUser = await User.isEmailTaken(userData.email);

  if (existingUser) {
    throw new ApiError(200, "User already registered");
  }
  const user = await User.create(userData);
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

module.exports = { createUser, getUserByEmail, getUserById };
