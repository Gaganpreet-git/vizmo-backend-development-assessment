const dotenv = require("dotenv");
dotenv.config();

const config = {
  mongoose: {
    url: process.env.MONGODB_URL,
    options: {
      useNewUrlParser: true,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
  },
};

module.exports = config;
