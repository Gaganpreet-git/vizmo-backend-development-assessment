const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const routes = require("./routes/");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const ApiError = require("./utils/ApiError");

// Swagger configuration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog CRUD",
      version: "1.0.0",
      description:
        "This API allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts. Users can create new posts, retrieve existing posts, update post content, delete posts, and more. Authentication is required for certain endpoints to ensure data security.",
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "apiKey",
          name: "Authorization",
          scheme: "bearer",
          in: "header",
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
