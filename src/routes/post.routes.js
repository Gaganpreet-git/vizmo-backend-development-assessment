const express = require("express");
const { postController } = require("../controllers");
const auth = require("../middlewares/auth");
const router = express.Router();

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     description: Create a new post with the provided data.
 *     security:
 *       - BearerAuth: []
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *                 description: ID of the post author
 *               category:
 *                 type: string
 *             example:
 *               title: "Post 1"
 *               content: "Post 1 content"
 *               author: "658fd4d63cbf735e6cc6e5f7"
 *               category: "Fashion"
 *     responses:
 *       201:
 *         description: Successfully created post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *                 author:
 *                   type: string
 *                 category:
 *                   type: string
 *               example:
 *                 title: "Post 1"
 *                 content: "Post 1 content"
 *                 author: "658fd4d63cbf735e6cc6e5f7"
 *                 category: "Fashion"
 *       401:
 *         description: Unauthorized access.
 */

// Route to add new post
router.post("/", auth, postController.addNewPost);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all posts
 *     description: Retrieve a list of all posts. Supports filtering by title and author.
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filter posts by title.
 *       - in: query
 *         name: author
 *         schema:
 *           type: string
 *         description: Filter posts by author ID.
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "6663fa7d32daa2e8b9ae234a"
 *                   title:
 *                     type: string
 *                     example: "Post 1"
 *                   content:
 *                     type: string
 *                     example: "Post 1 content"
 *                   author:
 *                     type: string
 *                     example: "658fd4d63cbf735e6cc6e5f7"
 *                   category:
 *                     type: string
 *                     example: "Fashion"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-06-08T06:30:21.656Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-06-08T06:30:21.656Z"
 *                   __v:
 *                     type: integer
 *                     example: 0
 *       401:
 *         description: Unauthorized access.
 */

// Route to get all posts also support filter by title & author
router.get("/", postController.getAllPosts);

/**
 * @swagger
 * /api/posts/{postId}:
 *   get:
 *     summary: Get a post by ID
 *     description: Retrieve a post by its ID.
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the post to retrieve.
 *     responses:
 *       200:
 *         description: A single post object.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "6663fa7d32daa2e8b9ae234a"
 *                 title:
 *                   type: string
 *                   example: "Post 1"
 *                 content:
 *                   type: string
 *                   example: "Post 1 content"
 *                 author:
 *                   type: string
 *                   example: "658fd4d63cbf735e6cc6e5f7"
 *                 category:
 *                   type: string
 *                   example: "Fashion"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-06-08T06:30:21.656Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-06-08T06:30:21.656Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 *       404:
 *         description: Post not found.
 *
 */

router.get("/:postId", postController.getPost);

/**
 * @swagger
 * /api/posts/{postId}:
 *   delete:
 *     summary: Delete a post by ID
 *     description: Delete a post by its ID.
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the post to delete.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       204:
 *         description: Post deleted successfully.
 *       404:
 *         description: Post not found.
 *       401:
 *         description: Unauthorized access.
 */
router.delete("/:postId", auth, postController.deletePost);

/**
 * @swagger
 * /api/posts/{postId}:
 *   put:
 *     summary: Update a post by ID
 *     description: Update a post with new data by its ID.
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the post to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *                 description: ID of the post author
 *               category:
 *                 type: string
 *             example:
 *               title: "Updated Post 1"
 *               content: "Updated Post 1 content"
 *               author: "658fd4d63cbf735e6cc6e5f7"
 *               category: "Fashion"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Post updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "6663fa7d32daa2e8b9ae234a"
 *                 title:
 *                   type: string
 *                   example: "Updated Post 1"
 *                 content:
 *                   type: string
 *                   example: "Updated Post 1 content"
 *                 author:
 *                   type: string
 *                   example: "658fd4d63cbf735e6cc6e5f7"
 *                 category:
 *                   type: string
 *                   example: "Fashion"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-06-08T06:30:21.656Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-06-08T06:30:21.656Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 *       404:
 *         description: Post not found.
 *       401:
 *         description: Unauthorized access.
 */

router.put("/:postId", auth, postController.updatePost);

module.exports = router;
