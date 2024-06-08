const Post = require("../models/post.model");
const ApiError = require("../utils/ApiError");

/**
 * Creates a new blog post.
 *
 * @param {Object} postData - The data for the new post.
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.content - The content of the post.
 * @param {string} postData.author - The author of the post.
 * @param {string} postData.category - The catrgory of the post.
 * @returns {Promise<Object>} - A promise that resolves to the created post object.
 */

const createPost = async (postData) => {
  const post = await Post.create(postData);
  return post;
};

/**
 * Retrieves all blog posts, optionally filtered by title and/or author.
 *
 * @param {string} [title] - The title to filter posts by.
 * @param {string} [author] - The author to filter posts by.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of post objects.
 * @throws {ApiError} - Throws an ApiError with a 404 status code if no posts are found.
 */

const getAllPosts = async (title, author) => {
  const filter = {};

  if (title) {
    filter.title = title;
  }

  if (author) {
    filter.author = author;
  }

  const posts = await Post.find(filter);
  if (!posts.length) {
    throw new ApiError(404, "No posts found");
  }
  return posts;
};

/**
 * Retrieves a blog post by its ID.
 *
 * @param {string} postId - The ID of the post to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the post object.
 * @throws {ApiError} - Throws an ApiError with a 404 status code if the post is not found.
 */

const getPostById = async (postId) => {
  const post = await Post.findById(postId);
  if (!post) {
    throw new ApiError(404, "Post not found");
  }
  return post;
};

/**
 * Deletes a blog post by its ID and author.
 *
 * @param {string} postId - The ID of the post to delete.
 * @param {string} author - The author of the post to delete.
 * @returns {Promise<Object>} - A promise that resolves to the deleted post object.
 * @throws {ApiError} - Throws an ApiError with a 404 status code if the post is not found or unauthorized to delete.
 */

const deletePost = async (postId, author) => {
  const post = await Post.findOneAndDelete({ _id: postId, author: author });
  if (!post) {
    throw new ApiError(404, "Post not found or Unauthorized");
  }
  return post;
};

/**
 * Updates a blog post by its ID and author.
 *
 * @param {string} postId - The ID of the post to update.
 * @param {Object} updatedData - The updated data for the post.
 * @param {string} author - The author of the post to update.
 * @returns {Promise<Object>} - A promise that resolves to the updated post object.
 * @throws {Error} - Throws an error if the post is not found or unauthorized to update.
 */

const updatePost = async (postId, updatedData, author) => {
  const updatedPost = await Post.findOneAndUpdate(
    { _id: postId, author: author },
    { $set: updatedData },
    { new: true }
  );

  if (!updatedPost) {
    throw new Error(404, "Post not found or unauthorized to update");
  }

  return updatedPost;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
};
