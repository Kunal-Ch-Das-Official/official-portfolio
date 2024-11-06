"use strict";
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
 * string and attempts to establish the connection when called. Event listeners
 * are set up to log connection status and handle errors. The connection process
 * is asynchronous and will exit the process with an error code if the connection
 * fails.
 *
 * Functionality:
 * - Checks if the database connection string is defined in the environment variables.
 * - Sets up event listeners for successful connection and error handling.
 * - Asynchronously attempts to connect to the database using the provided connection string.
 * - Logs messages to the console indicating the connection status.
 * - Exits the process with an error code if the connection fails.
 *
 * Usage:
 * Import this module and call the `connectDb` function to establish a connection
 * to the database when starting the application. The `connectDb` function is asynchronous,
 * so it should be called using `await` or within an async function. Ensure that the
 * environment variables are properly configured to include the database connection string.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const envConfig_1 = __importDefault(require("./envConfig"));
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!envConfig_1.default.databaseConnectionString) {
            throw new Error("Database connection string is not defined in the environment variables.");
        }
        mongoose_1.default.connection.on("connected", () => {
            console.log("Database connected successfully");
        });
        mongoose_1.default.connection.on("error", (err) => {
            console.log("Error occurred in database system", err);
        });
        // Removed useNewUrlParser and useUnifiedTopology
        yield mongoose_1.default.connect(envConfig_1.default.databaseConnectionString);
    }
    catch (error) {
        console.log("Sorry, we are unable to connect to the database", error);
        process.exit(1);
    }
});
exports.default = connectDb;
