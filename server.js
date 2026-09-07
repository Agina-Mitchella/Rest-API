// Import Express
const express = require("express");

// Import Mongoose
const mongoose = require("mongoose");

// Import dotenv
const dotenv = require("dotenv");

// Import the User model
const User = require("./models/User");

// Load environment variables from config/.env
dotenv.config({ path: "./config/.env" });

// Create the Express application
const app = express();

// Middleware that allows Express to receive JSON data
app.use(express.json());

// Get the port from the .env file
const PORT = process.env.PORT || 3000;

// Get the MongoDB connection string from the .env file
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB Atlas
mongoose
  .connect(MONGO_URI)
  .then(() => {
    // Display a message when the database connection succeeds
    console.log("Connected to MongoDB Atlas successfully!");

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    // Display an error if the database connection fails
    console.error("MongoDB connection failed:", error);
  });