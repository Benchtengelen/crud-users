# CRUD Users API

A simple Node.js REST API project for managing users with basic CRUD (Create, Read, Update, Delete) operations.

## 🚀 Features

* Create a new user
* Get all users
* Get a user by ID
* Update user information
* Delete a user
* Basic validation and error handling

## 🛠️ Technologies Used

* Node.js
* Express.js
* Body-parser (or built-in express.json)

## 📦 API Endpoints

### Get all users

```
GET /users
```

### Get user by ID

```
GET /users/:id
```

### Create a new user

```
POST /users
```

Request body example:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Update a user

```
PUT /users/:id
```

Request body example:

```json
{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```

### Delete a user

```
DELETE /users/:id
```

## ▶️ How to Run

1. Clone the repository
2. Install dependencies:

```
npm install
```

3. Start the server:

```
node index.js
```

4. Test endpoints using Postman or similar tools

## 🎯 Purpose of the Project

This project was created to practice building RESTful APIs with Node.js and Express, handling HTTP requests, routing, and basic data manipulation.

## 🧠 Notes

* Data is stored in-memory (no database)
* Suitable as a beginner-level Node.js backend project

---
