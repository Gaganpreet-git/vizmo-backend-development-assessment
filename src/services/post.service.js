const createPost = async (postData) => {
  const post = await Post.create(postData);
  return post;
};

const getAllPosts = () => {};

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
