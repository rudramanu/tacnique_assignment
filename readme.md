# Task Management APIs

## Description

Created a RESTful Node.js API for task management with CRUD operations, user authentication, error handling, and optional rate limiting. Tasks have ID, title, description, date, and status.

## Prerequisites

- Node.js installed on your machine.
- MongoDB database setup

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory with the following variables:

   ```
   mongo_url=<your-mongodb-url>
   port=<your-preferred-port>
   secret_key=<your-secret-key>
   ```

4. Start the server:
   ```bash
   npm run server
   ```

## Application Structure

- `index.js`: Main application file with server setup.
- `configs/db.js`: MongoDB connection setup.
- `routes/user.route.js`: User management routes.
- `routes/task.route.js`: Task management routes.
- `middlewares/ratelimiter.js`: Rate limiting middleware.
- `middlewares/authentication.js`: Authentication middleware.
- `models/user.model.js`: User schema and model.
- `models/task.model.js`: Task schema and model.

## API Endpoints

### User Routes

#### Register User

- Endpoint: `/user/register`
- Method: POST
- Body:
  - `name` (String, required): User's name.
  - `email` (String, required): User's email.
  - `password` (String, required): User's password.
- Description: Register a new user.

#### User Login

- Endpoint: `/user/login`
- Method: POST
- Body:
  - `email` (String, required): User's email.
  - `password` (String, required): User's password.
- Description: User login and token generation.

### Task Routes

#### Create Task

- Endpoint: `/tasks`
- Method: POST
- Body:
  - `title` (String, required): Task title.
  - `description` (String, required): Task description.
- Description: Create a new task.

#### Get All Tasks

- Endpoint: `/tasks`
- Method: GET
- Description: Get all tasks for the authenticated user.

#### Get Task by ID

- Endpoint: `/tasks/:id`
- Method: GET
- Params:
  - `id` (String, required): Task ID.
- Description: Get a specific task by ID for the authenticated user.

#### Update Task

- Endpoint: `/tasks/:id`
- Method: PUT
- Params:
  - `id` (String, required): Task ID.
- Body:
  - `title` (String): Updated task title.
  - `description` (String): Updated task description.
  - `status` (String, enum: "pending", "completed"): Updated task status.
- Description: Update a specific task by ID for the authenticated user.

#### Delete Task

- Endpoint: `/tasks/:id`
- Method: DELETE
- Params:
  - `id` (String, required): Task ID.
- Description: Delete a specific task by ID for the authenticated user.

# Thanks for checkout 🙏
