const express = require("express");
const { authController } = require("../controllers");
const postRoutes = require("../routes/post.routes");
const router = express.Router();

//Sample output for /register & /login

/*{
    "user": {
        "name": "User2",
        "email": "user2@gmail.com",
        "password": "$2a$10$MygmWSpAxU72bGvVoJM5GetDzlBZY0YkjdzbSM.77zm3vwNjt1H3u",
        "_id": "6663ea802d0ee9a03013f7c1",
        "createdAt": "2024-06-08T05:22:08.658Z",
        "updatedAt": "2024-06-08T05:22:08.658Z",
        "__v": 0
    },
    "tokens": {
        "access": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjYzZWE4MDJkMGVlOWEwMzAxM2Y3YzEiLCJleHAiOjE3MTc4Mzg1MjgsImlhdCI6MTcxNzgyNDEyOC43OX0.kuzI_jKscJo6wOKBnE0rx2rplRYVOauxXQOKx-QdbJc",
            "expires": "2024-06-08T09:22:08.000Z"
        }
    }
}
*/
router.post("/register", authController.register);
router.post("/login", authController.login);
router.use("/posts", postRoutes);

module.exports = router;
