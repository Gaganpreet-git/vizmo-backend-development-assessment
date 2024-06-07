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
  },
};

module.exports = config;
