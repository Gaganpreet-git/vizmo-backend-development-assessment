const mongoose = require("mongoose");

const categoryEnum = ["Technology", "Health", "Travel", "Food", "Fashion"];

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, max: 100 },
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: { type: String, required: true, enum: categoryEnum },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
