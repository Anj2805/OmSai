const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling uncaught exceptions (like using an undefined variable)
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");

    process.exit(1); // Exit the process with failure code
});

// Config
dotenv.config({ path: "backend/config/config.env" });

// Connecting to database
connectDatabase();

// Starting the server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection Handler (e.g., Database connection errors)
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");

    // Close the server and exit the process
    server.close(() => {
        process.exit(1);
    });
});

