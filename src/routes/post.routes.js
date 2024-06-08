const express = require("express");
const { postController } = require("../controllers");
const router = express.Router();

/**
 * sample post created
 {
    "title": "Post 1",
    "content": "Post 1 content",
    "author": "658fd4d63cbf735e6cc6e5f7",
    "category": "Fashion",
    "_id": "6663fa7d32daa2e8b9ae234a",
    "createdAt": "2024-06-08T06:30:21.656Z",
    "updatedAt": "2024-06-08T06:30:21.656Z",
    "__v": 0
}
 */

// Route to add new post
router.post("/", postController.addNewPost);

// [
//     {
//         "_id": "6663fa7d32daa2e8b9ae234a",
//         "title": "Post 1",
//         "content": "Post 1 content",
//         "author": "658fd4d63cbf735e6cc6e5f7",
//         "category": "Fashion",
//         "createdAt": "2024-06-08T06:30:21.656Z",
//         "updatedAt": "2024-06-08T06:30:21.656Z",
//         "__v": 0
//     }
// ]

// Route to get all posts also support filter by title & author
router.get("/", postController.getAllPosts);

/*{
    "_id": "66640521f38cbd49003d9a5f",
    "title": "Post 2",
    "content": "Post 2 content",
    "author": "658fd4d63cbf735e6cc6e5f7",
    "category": "Fashion",
    "createdAt": "2024-06-08T07:15:45.340Z",
    "updatedAt": "2024-06-08T07:15:45.340Z",
    "__v": 0
}
    */

// Route to get details of single blog post
router.get("/:postId", postController.getPost);

// Route to delete blog post
router.delete("/:postId", postController.deletePost);

/*{
    "_id": "66640521f38cbd49003d9a5f",
    "title": "Post 2 updated",
    "content": "Post 2 content updated",
    "author": "658fd4d63cbf735e6cc6e5f7",
    "category": "Fashion",
    "createdAt": "2024-06-08T07:15:45.340Z",
    "updatedAt": "2024-06-08T07:35:17.825Z",
    "__v": 0
}*/

// Route to update blog post
router.put("/:postId", postController.updatePost);

module.exports = router;
