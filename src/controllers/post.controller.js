const { postService } = require("../services");
const catchAsync = require("../utils/CatchAsync");

// Function to add new post
const addNewPost = async (req, res) => {
  const author = req.user.sub;
  console.log(req.user);
  const post = await postService.createPost({ ...req.body, author });
  console.log(post);
  res.status(201).json(post);
};

// Function to get all posts with filtering
const getAllPosts = async (req, res) => {
  const { title, author } = req.query;
  const post = await postService.getAllPosts(title, author);
  res.status(200).json(post);
};

// Function to get details of a single post
const getPost = async (req, res) => {
  const { postId } = req.params;
  const post = await postService.getPostById(postId);
  res.status(200).json(post);
};

// Function to delete a post
const deletePost = async (req, res) => {
  const { postId } = req.params;
  const author = req.user.sub;
  const post = await postService.deletePost(postId, author);
  res.status(204).json(post);
};

// Function to update a post
const updatePost = async (req, res) => {
  const { postId } = req.params;
  const postData = req.body;
  const author = req.user.sub;
  console.log(postId, postData, author);
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
