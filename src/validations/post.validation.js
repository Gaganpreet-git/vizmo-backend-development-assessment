const Joi = require("joi");

const categoryEnum = ["Technology", "Health", "Travel", "Food", "Fashion"];

const addPostSchema = Joi.object({
  title: Joi.string().max(100).required(),
  content: Joi.string().required(),
  category: Joi.string()
    .valid(...categoryEnum)
    .required(),
});

module.exports = addPostSchema;
