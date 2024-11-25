const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // Import the CORS middleware

const app = express();

// Importing the errorMiddleware
const errorMiddleware = require("./middlewares/error");

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(cookieParser());

// Use CORS middleware to handle cross-origin requests
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from your React app
    credentials: true, // Allow cookies and authentication headers
  })
);

// Route Imports
const productRoutes = require("./routes/productRoute");
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute");

// Use Routes
app.use("/api/v1/products", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);

// Middleware for handling errors
app.use(errorMiddleware); // Make sure to use the middleware here

module.exports = app;
