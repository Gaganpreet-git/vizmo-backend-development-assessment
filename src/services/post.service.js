const Post = require("../models/post.model");

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

const getPostById = (postId) => {};

const deletePost = (postId) => {};

const updatePost = (postId, updatedData) => {};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
};
