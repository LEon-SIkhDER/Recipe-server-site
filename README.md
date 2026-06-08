# Recipe Server

A simple Express.js REST API for managing cooking recipes. The server connects to MongoDB Atlas and provides endpoints for creating, reading, updating, liking, filtering, sorting, and deleting recipes.

## Features

- Express.js API server
- MongoDB database connection
- CORS enabled
- Environment variable support with `dotenv`
- Recipe CRUD operations
- Filter recipes by cuisine type
- Get user-specific recipes
- Get top liked recipes

## Tech Stack

- Node.js
- Express.js
- MongoDB
- CORS
- Dotenv
- Vercel

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- A MongoDB Atlas database

### Installation

Install project dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add your MongoDB credentials:

```env
USER=your_mongodb_username
PASS=your_mongodb_password
```

The server uses these variables to connect to MongoDB Atlas.

### Run Locally

Start the server:

```bash
nodemon index.js
```

By default, the server runs on:

```text
http://localhost:3000
```

You can also provide a custom port with the `PORT` environment variable.

## API Endpoints

### Health Check

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | Checks whether the server is running |

### Recipes

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/recipes` | Get all recipes |
| GET | `/recipes/:id` | Get a single recipe by recipe ID |
| POST | `/recipes` | Add a new recipe |
| PUT | `/recipes/:id` | Update a recipe by recipe ID |
| PATCH | `/recipes/:id` | Update the likes count of a recipe |
| DELETE | `/recipes/:id` | Delete a recipe by recipe ID |

### Filtering and Sorting

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/sort6` | Get the top 6 recipes sorted by likes in descending order |
| GET | `/sort/:id` | Get recipes by cuisine type |
| GET | `/my-recipe/:id` | Get recipes created by a specific user ID |


## Deployment

This project includes a `vercel.json` file for deployment on Vercel. The deployment routes all supported HTTP methods to the Express server.

Before deploying, add the required environment variables in your Vercel project settings:

```text
USER
PASS
```

