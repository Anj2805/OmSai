const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const Product = require("../models/productModel");


// Register a new user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password, avatar } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: avatar.public_id,
            url: avatar.url
        }
    });

    sendToken(user, 201, res);
});

// Login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please enter email and password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    sendToken(user, 200, res);
});

// Logout user
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
});

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler("User not found with this email", 404));
    }

    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;
    const message = `Your password reset token is:\n\n${resetPasswordUrl}\n\nIf you did not request this email, please ignore it.`;

    try {
        await sendEmail({
            email: user.email,
            subject: "Password Recovery",
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`,
        });
    } catch (error) {
        // Reset token fields if the email sending fails
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }
});


// Reset password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(new ErrorHandler("Invalid or expired password reset token", 400));
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    sendToken(user, 200, res);
});

// Get logged-in user details
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});

// Update user password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old password is incorrect", 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = req.body.newPassword;
    await user.save();

    sendToken(user, 200, res);
});

// Update user profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    };

    if (req.body.avatar) {
        newUserData.avatar = {
            public_id: req.body.avatar.public_id,
            url: req.body.avatar.url,
        };
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        user,
    });
});


//Get all users (admin)
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    // Fetch all users from the database
    const users = await User.find();

    // If no users are found
    if (!users || users.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No users found',
        });
    }

    // Return the users in the response if found
    return res.status(200).json({
        success: true,
        users,
    });
});


//Get single user (admin)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
    const userId = req.params.id; // Correctly access the 'id' parameter

    // Check if the user exists in the database
    const user = await User.findById(userId);

    if (!user) {
        return next(new ErrorHandler(`User with ID: ${userId} not found`, 404));
    }

    // Send the response with the user's details
    res.status(200).json({
        success: true,
        user,
    });
});



//update user role (admin)
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params; // Get user id from params (admin updating a user's role)
    const { role } = req.body; // Get new role from request body

    // Validate if the role exists
    if (!role || !['user', 'admin'].includes(role)) {
        return next(new ErrorHandler("Invalid role", 400));
    }

    // Find the user by ID and update their role
    const user = await User.findByIdAndUpdate(
        id, // Use user ID from params
        { role }, // Update only the role
        {
            new: true, // Return the updated user object
            runValidators: true, // Ensure validation is applied
            useFindAndModify: false, // Avoid deprecation warning
        }
    );

    // If the user is not found
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    res.status(200).json({
        success: true,
        message: "User role updated successfully",
        user,
    });
});




// Delete user (Admin)
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    // Find the user by ID
    const user = await User.findById(req.params.id);

    // If user does not exist, throw an error
    if (!user) {
        return next(new ErrorHandler(`User does not exist with ID: ${req.params.id}`, 404));
    }

    // Remove the user
    await user.deleteOne();

    res.status(200).json({
        success: true,
        message: "User deleted successfully",
    });
});



