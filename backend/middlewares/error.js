// Importing the ErrorHandler class from utils/errorHandler.js
const ErrorHandler = require("../utils/errorHandler");

const errorMiddleware = (err, req, res, next) => {
    // Set default status code and message in case they are not provided
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';

    // Handling Mongoose Validation Errors (e.g., required fields or type mismatch)
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message);
        err = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Cast Errors (e.g., invalid ObjectId)
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Handling MongoDB Duplicate Key Errors (e.g., unique field violation)
    if (err.code === 11000) {
        const message = `Duplicate field value entered: ${Object.keys(err.keyValue)}`;
        err = new ErrorHandler(message, 400);
    }

    // Handling JWT Expired Error
    if (err.name === 'TokenExpiredError') {
        const message = 'JWT token has expired. Please log in again.';
        err = new ErrorHandler(message, 401);  // 401 Unauthorized for expired tokens
    }

    // Handling JWT Invalid or Malformed Error
    if (err.name === 'JsonWebTokenError') {
        const message = 'Invalid or malformed JWT token. Please log in again.';
        err = new ErrorHandler(message, 401);  // 401 Unauthorized for invalid tokens
    }

    // Send the error response
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

module.exports = errorMiddleware;  // Exporting the errorMiddleware
