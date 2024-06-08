const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .pattern(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/)
    .required()
    .messages({
      "string.pattern.base": "Please fill a valid email address",
    }),
  password: Joi.string()
    .min(8)
    .pattern(/[A-Z]/, "uppercase")
    .pattern(/[a-z]/, "lowercase")
    .pattern(/\d/, "digit")
    .pattern(/[^a-zA-Z0-9]/, "special character")
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters long",
      "string.pattern.name": "Password must contain at least one {#name}",
    }),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .pattern(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/)
    .required()
    .messages({
      "string.pattern.base": "Please fill a valid email address",
    }),
  password: Joi.string()
    .min(8)
    .pattern(/[A-Z]/, "uppercase")
    .pattern(/[a-z]/, "lowercase")
    .pattern(/\d/, "digit")
    .pattern(/[^a-zA-Z0-9]/, "special character")
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters long",
      "string.pattern.name": "Password must contain at least one {#name}",
    }),
});

module.exports = { registerSchema, loginSchema };
