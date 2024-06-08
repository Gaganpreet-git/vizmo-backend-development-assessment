const { postService } = require("../services");
const catchAsync = require("../utils/CatchAsync");

/**
 * Adds a new post with the provided data.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The data for the new post.
 * @param {string} req.body.title - The title of the post.
 * @param {string} req.body.content - The content of the post.
 * @param {Object} req.user - The user object extracted from the JWT token.
 * @param {string} req.user.sub - The ID of the authenticated user.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the post is successfully added.
 */ const addNewPost = async (req, res) => {
  const author = req.user.sub;
  const post = await postService.createPost({ ...req.body, author });
  res.status(201).json(post);
};

// Function to get all posts with filtering
const getAllPosts = async (req, res) => {
  const { title, author } = req.query;
  const post = await postService.getAllPosts(title, author);
  res.status(200).json(post);
};

/**
 * Retrieves all posts with optional filtering by title and/or author.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.query - The query parameters for filtering.
 * @param {string} req.query.title - The title to filter posts by.
 * @param {string} req.query.author - The author to filter posts by.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the filtered posts.
 */

/**
 * Retrieves details of a single post by its ID.
 *
 * @param {Object} req - The request object.
 * @param {string} req.params.postId - The ID of the post to retrieve.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the details of the post.
 */

const getPost = async (req, res) => {
  const { postId } = req.params;
  const post = await postService.getPostById(postId);
  res.status(200).json(post);
};

/**
 * Deletes a post by its ID if the authenticated user is its author.
 *
 * @param {Object} req - The request object.
 * @param {string} req.params.postId - The ID of the post to delete.
 * @param {Object} req.user - The user object extracted from the JWT token.
 * @param {string} req.user.sub - The ID of the authenticated user.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the post is successfully deleted.
 */

const deletePost = async (req, res) => {
  const { postId } = req.params;
  const author = req.user.sub;
  const post = await postService.deletePost(postId, author);
  res.status(204).json(post);
};

/**
 * Updates a post by its ID if the authenticated user is its author.
 *
 * @param {Object} req - The request object.
 * @param {string} req.params.postId - The ID of the post to update.
 * @param {Object} req.body - The updated data for the post.
 * @param {Object} req.user - The user object extracted from the JWT token.
 * @param {string} req.user.sub - The ID of the authenticated user.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the updated post.
 */

const updatePost = async (req, res) => {
  const { postId } = req.params;
  const postData = req.body;
  const author = req.user.sub;
  const post = await postService.updatePost(postId, postData, author);
  res.status(200).json(post);
};

module.exports = {
  addNewPost: catchAsync(addNewPost),
  getAllPosts: catchAsync(getAllPosts),
  getPost: catchAsync(getPost),
  deletePost: catchAsync(deletePost),
  updatePost: catchAsync(updatePost),
};
