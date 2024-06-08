const Post = require("../models/post.model");
const ApiError = require("../utils/ApiError");

const createPost = async (postData) => {
  const post = await Post.create(postData);
  return post;
};

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

const getPostById = async (postId) => {
  const post = await Post.findById(postId);
  if (!post) {
    throw new ApiError(404, "Post not found");
  }
  return post;
};

const deletePost = (postId) => {};

const updatePost = async (postId, updatedData, author) => {
  const updatedPost = await Post.findOneAndUpdate(
    { _id: postId, author: author },
    { $set: updatedData },
    { new: true }
  );

  if (!updatedPost) {
    throw new Error("Post not found or unauthorized to update");
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
