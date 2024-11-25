const express = require("express");
const { 
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,
    getAllUsers,
    getSingleUser,
    updateUserRole,
    deleteUser,

} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

// Register a new user
router.route("/register").post(registerUser);

// Login a user
router.route("/login").post(loginUser);

// Logout user
router.route("/logout").get(logoutUser);

// Forgot password
router.route("/password/forgot").post(forgotPassword);

// Reset password
router.route("/password/reset/:token").put(resetPassword);

// Get logged-in user details (profile)
router.route("/me").get(isAuthenticatedUser, getUserDetails);

// Update user password
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

// Update user profile
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

// Route to get all users (admin-only)
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), getAllUsers);

// Route to get single users (admin-only)
router
    .route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getSingleUser)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);



module.exports = router;
