const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");

/**
 * Creates a new user with the provided user data.
 *
 * @param {Object} userData - The data for the new user.
 * @param {string} userData.email - The email address of the user.
 * @param {string} userData.password - The password of the user.
 * @param {string} [userData.name] - The name of the user.
 * @returns {Promise<Object>} - A promise that resolves to the created user object.
 * @throws {ApiError} - Throws an ApiError with a 200 status code if the email is already taken.
 */

const createUser = async (userData) => {
  // check if user already exists
  const existingUser = await User.isEmailTaken(userData.email);

  if (existingUser) {
    throw new ApiError(200, "User already registered");
  }
  const user = await User.create(userData);
  return user;
};

/**
 * Retrieves a user by their email address.
 *
 * @param {string} email - The email address of the user.
 * @returns {Promise<Object>} - A promise that resolves to the user object.
 * @throws {ApiError} - Throws an ApiError with a 200 status code if the user is not found.
 */

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(200, "User not found");
  }
  return user;
};

/**
 * Retrieves a user by their ID.
 *
 * @param {string} id - The ID of the user.
 * @returns {Promise<Object>} - A promise that resolves to the user object.
 * @throws {ApiError} - Throws an ApiError with a 200 status code if the user is not found.
 */

const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(200, "User not found");
  }
  return user;
};

module.exports = { createUser, getUserByEmail, getUserById };
