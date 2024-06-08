const catchAsync = require("../utils/CatchAsync");

// Function to add new post
const addNewPost = async (req, res) => {};

// Function to get all posts with filtering
const getAllPosts = async (req, res) => {};

// Function to get details of a single post
const getPost = async (req, res) => {};

// Function to delete a post
const deletePost = async (req, res) => {};

// Function to update a post
const updatePost = async (req, res) => {};

module.exports = {
  addNewPost: catchAsync(addNewPost),
  getAllPosts: catchAsync(getAllPosts),
  getPost: catchAsync(getPost),
  deletePost: catchAsync(deletePost),
  updatePost: catchAsync(updatePost),
};
