// utils/errorHandler.js

class ErrorHandler extends Error {
    constructor(message, statusCode) {
        // Call the parent class constructor (Error)
        super(message);
        
        // Set the status code from the argument
        this.statusCode = statusCode;

        // Capturing stack trace for error
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;  // Exporting the ErrorHandler class
