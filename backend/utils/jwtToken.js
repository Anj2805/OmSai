// Create Token and saving in cookie
// Function to send JWT token to the user
const sendToken = (user, statusCode, res) => {
    // Generate JWT token using the getJWTToken method from the user model
    const token = user.getJWTToken();

    // Define cookie options
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // Cookie expiration time from environment variable
        ),
        httpOnly: true, // This ensures the cookie cannot be accessed via JavaScript (client-side)
    };

    // Send the token and user data as part of the response
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user,
    });
};

module.exports = sendToken;
