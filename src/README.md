# Blog CRUD

## Introduction

This project implements CRUD (Create, Read, Update, Delete) operations for managing blog posts. It provides endpoints for creating, retrieving, updating, and deleting blog posts. User authentication is implemented using JWT (JSON Web Tokens) to secure the endpoints.

### Backend Interaction

The backend interacts with the frontend or client applications through a RESTful API. It handles HTTP requests for CRUD operations on blog posts and authenticates users using JWT tokens.

### API Documentation

localhost:3000/api-docs

### Functionality

- **Create a New Blog Post**: Users can create a new blog post by sending a POST request to the `/api/posts` endpoint with the required data (title, content, category).
- **Get All Blog Posts**: Users can retrieve all blog posts by sending a GET request to the `/api/posts` endpoint. Filtering by title and author is supported.
- **Get Details of Single Blog Post**: Users can retrieve details of a single blog post by sending a GET request to the `/api/posts/:postId` endpoint, where `:postId` is the ID of the post.
- **Delete Blog Post**: Users can delete an existing blog post by sending a DELETE request to the `/api/posts/:postId` endpoint, where `:postId` is the ID of the post.
- **Update Blog Post**: Users can update an existing blog post by sending a PUT request to the `/api/posts/:postId` endpoint, where `:postId` is the ID of the post. The updated data (title, content) should be included in the request body.

### Error Handling

The project includes error handling mechanisms to handle various scenarios, such as invalid requests, unauthorized access, and internal server errors. Express error handler middleware is used to centralize error handling and provide consistent error responses.

## Technologies Used

The project is built using the following technologies:

- Node.js
- javascript
- Express.js
- MongoDB
- JSON Web Tokens (JWT) for authentication
- mongoose

## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Gaganpreet-git/vizmo-backend-development-assessment-/tree/main`
2. Navigate into the project directory: `cd /src`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm run dev`
2. Interact with the RESTful API using a tool like Postman or by sending HTTP requests from a client application.
