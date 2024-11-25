const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");

// Middleware to check if user is authenticated
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies || req.headers.authorization; // Try cookies first, then Authorization header

    // Check if token is available
    if (!token) {
        return next(new ErrorHandler("Please log in to access this resource", 401));
    }

    // If token is in Authorization header, remove 'Bearer ' prefix
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    // Verify token and handle any errors in the process
    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        
        // Retrieve user information based on the token's id
        req.user = await User.findById(decodedData.id);
        
        if (!req.user) {
            return next(new ErrorHandler("User not found", 404));
        }

        next();
    } catch (error) {
        return next(new ErrorHandler("Invalid or expired token", 401));
    }
});

// Middleware to authorize roles (e.g., admin)
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        // Ensure that user object is available (in case of auth failure)
        if (!req.user) {
            return next(new ErrorHandler("User not authenticated", 401));
        }

        // Check if the user's role is allowed
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(
                    `Role: ${req.user.role} is not allowed to access this resource`,
                    403
                )
            );
        }
        
        next();
    };
};
