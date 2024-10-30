/**
 * Database Connection Setup
 * Project: Kunal Chandra Das Portfolio
 * Author: Kunal Chandra Das
 * Date: 29/10/2024
 * Version: 2.0.0
 *
 * Description:
 * This module handles the connection to the MongoDB database using Mongoose.
 * It imports the necessary environment configuration for the database connection
 * string and establishes the connection when called. It also sets up event listeners
 * to log connection status and handle any errors that may occur.
 *
 * Functionality:
 * - Checks if the database connection string is defined in the environment variables.
 * - Sets up event listeners for successful connection and error handling.
 * - Attempts to connect to the database using the provided connection string.
 * - Logs messages to the console indicating the connection status.
 * - Exits the process with an error code if the connection fails.
 *
 * Usage:
 * Import this module and call the `connectDb` function to establish a connection
 * to the database when starting the application. Ensure that the environment
 * variables are properly configured to include the database connection string.
 */

import mongoose from "mongoose";
import envConfig from "./envConfig";

const connectDb = async (): Promise<void> => {
  try {
    if (!envConfig.databaseConnectionString) {
      throw new Error(
        "Database connection string is not defined in the environment variables."
      );
    }

    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully");
    });

    mongoose.connection.on("error", (err: Error) => {
      console.log("Error occurred in database system", err);
    });

    // Removed useNewUrlParser and useUnifiedTopology
    await mongoose.connect(envConfig.databaseConnectionString);
  } catch (error) {
    console.log("Sorry, we are unable to connect to the database", error);
    process.exit(1);
  }
};

export default connectDb;
