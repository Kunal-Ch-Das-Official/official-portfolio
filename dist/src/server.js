"use strict";
/*
 Project Name: Kunal Chandra Das Official Portfolio
 Author: Kunal Chandra Das
 Description: This is the main application file for the Kunal Chandra Das Portfolio.
              It sets up an Express server to handle incoming requests and process
              them accordingly, sending appropriate responses back to the client.
 Date: 29.10.2024
 Version: 2.0.0
 *
 Functionality:
 - Initializes an Express application and configures middleware for handling
   CORS, JSON requests, and URL-encoded data.
 - Defines a root route that returns a welcome message and a status code of 200.
 - Includes commented-out error handling middleware for managing potential
   errors from file uploads (using Multer) and other request errors.
 *
 Usage:
 Use this application file to start the server and handle HTTP requests
 related to the Kunal Chandra Das portfolio. It serves as the entry point
 for client interactions with the backend services.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRouter_1 = __importDefault(require("./routes/auth-router/authRouter"));
const projectsRouter_1 = __importDefault(require("./routes/projects-router/projectsRouter"));
const multer_1 = __importDefault(require("multer"));
const reviewsRouter_1 = __importDefault(require("./routes/reviews-router/reviewsRouter"));
const resumeRouter_1 = __importDefault(require("./routes/resume-router/resumeRouter"));
const blogRouter_1 = __importDefault(require("./routes/blog-router/blogRouter"));
const contactsRouter_1 = __importDefault(require("./routes/contacts-router/contactsRouter"));
const server = (0, express_1.default)();
// Genaral Middleware
server.use((0, cors_1.default)());
server.use(express_1.default.json()); // Using Express's built-in JSON middleware
server.use(express_1.default.urlencoded({ extended: true })); // URL-encoded data
// Base Route Endpoint
server.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to (kunalchandradas.tech) backend server",
        owner: "Kunal Chandra Das.",
        admin: "adinportal.kunalchandradas.tech",
        main: "kunalchandradas.tech",
        route: "Home",
    });
});
// Register routers
server.use("/api/v2/auth/admin", authRouter_1.default); // Admin authentication routes
server.use("/api/v2/all/projects", projectsRouter_1.default); // Projects routes
server.use("/api/v2/reviews", reviewsRouter_1.default); // Reviews routes
server.use("/api/v2/resume", resumeRouter_1.default); // Resume routes
server.use("/api/v2/blogs", blogRouter_1.default); // Blogs routes
server.use("/api/v2/contacts", contactsRouter_1.default); // Contacts routes
// Error handling middleware
server.use((err, req, res, next) => {
    if (err instanceof multer_1.default.MulterError) {
        // Handle Multer-specific errors
        res.status(500).send(err.message);
    }
    else if (err) {
        // Handle other errors
        res.status(400).send(err.message);
    }
    else {
        next(); // Pass to the next middleware if no error
    }
});
exports.default = server;
