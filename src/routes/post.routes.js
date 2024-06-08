const express = require("express");
const { postController } = require("../controllers");
const router = express.Router();

// Route to add new post
router.post("/", postController.addNewPost);

// Route to get all posts also support filter by title & author
router.get("/", postController.getAllPosts);

// Route to get details of single blog post
router.get("/:postId", postController.getPost);

// Route to delete blog post
router.delete("/:postId", postController.deletePost);

// Route to update blog post
router.put("/:postId", postController.updatePost);

module.exports = router;
