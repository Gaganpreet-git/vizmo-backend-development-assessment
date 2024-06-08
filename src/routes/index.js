const express = require("express");
const { authController } = require("../controllers");
const postRoutes = require("../routes/post.routes");
const validate = require("../middlewares/validate");
const {
  registerSchema,
  loginSchema,
} = require("../validations/auth.validation");
const router = express.Router();

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with the provided information.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               name: User2
 *               email: user2@gmail.com
 *               password: password123
 *     responses:
 *       201:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             example:
 *               user:
 *                 name: User2
 *                 email: user2@gmail.com
 *                 createdAt: "2024-06-08T05:22:08.658Z"
 *                 updatedAt: "2024-06-08T05:22:08.658Z"
 *               tokens:
 *                 access:
 *                   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjYzZWE4MDJkMGVlOWEwMzAxM2Y3YzEiLCJleHAiOjE3MTc4Mzg1MjgsImlhdCI6MTcxNzgyNDEyOC43OX0.kuzI_jKscJo6wOKBnE0rx2rplRYVOauxXQOKx-QdbJc"
 *                   expires: "2024-06-08T09:22:08.000Z"
 *       400:
 *         description: Invalid request body.
 *       500:
 *         description: Internal server error.
 */

router.post("/register", validate(registerSchema), authController.register);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login as a user
 *     description: Login with email and password to obtain access token.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: user2@gmail.com
 *               password: password123
 *     responses:
 *       200:
 *         description: User logged in successfully.
 *         content:
 *           application/json:
 *             example:
 *               user:
 *                 name: User2
 *                 email: user2@gmail.com
 *                 createdAt: "2024-06-08T05:22:08.658Z"
 *                 updatedAt: "2024-06-08T05:22:08.658Z"
 *               tokens:
 *                 access:
 *                   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjYzZWE4MDJkMGVlOWEwMzAxM2Y3YzEiLCJleHAiOjE3MTc4Mzg1MjgsImlhdCI6MTcxNzgyNDEyOC43OX0.kuzI_jKscJo6wOKBnE0rx2rplRYVOauxXQOKx-QdbJc"
 *                   expires: "2024-06-08T09:22:08.000Z"
 *       401:
 *         description: Unauthorized - Invalid credentials.
 *       500:
 *         description: Internal server error.
 */

router.post("/login", validate(loginSchema), authController.login);
router.use("/posts", postRoutes);

module.exports = router;
