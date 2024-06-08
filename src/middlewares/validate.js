const Joi = require("joi");
const ApiError = require("../utils/ApiError");

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      // If validation fails, send a 400 Bad Request response with the error details
      throw new ApiError(400, error.details[0].message);
    }
    // If validation succeeds, call the next middleware in the chain
    next();
  };
};

module.exports = validate;
