const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const routes = require("./routes/");

app.use(express.json());

// Reroute all api requests to routes
app.use("/api", routes);

// Middleware to handle Errors.
app.use(errorHandler);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(404, "Not found"));
});

module.exports = app;
