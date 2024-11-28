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

import express, { Request, Response, Application, NextFunction } from "express";
import cors from "cors";
import admiAuthenticationRouter from "./routes/auth-router/authRouter";
import projectsRouter from "./routes/projects-router/projectsRouter";
import multer from "multer";
import reviewsRouter from "./routes/reviews-router/reviewsRouter";
import resumeRouter from "./routes/resume-router/resumeRouter";
import blogRouter from "./routes/blog-router/blogRouter";
import contactsRouter from "./routes/contacts-router/contactsRouter";
import dashboardRouter from "./routes/dashboard-router/dashboardRouter";
import CrossOrigin from "../src/middlewares/cors-middleware/cors";
import helmet from "helmet";
const server: Application = express();

// Genaral Middleware
server.use(cors());
server.use(CrossOrigin.allowOrigin);
server.use(express.json()); // Using Express's built-in JSON middleware
server.use(express.urlencoded({ extended: true })); // URL-encoded data
// Helmet rule
server.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https://*"],
        connectSrc: ["'self'", "https://*"],
        fontSrc: [
          "'self'",
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        objectSrc: ["'none'"], // Disallow <object>, <embed>, <applet>
        frameSrc: ["'none'"], // Disallow framing of your app
        upgradeInsecureRequests: [], // Force HTTPS for all requests
      },
    },
    frameguard: {
      action: "deny", // Prevent clickjacking
    },
    referrerPolicy: {
      policy: "strict-origin-when-cross-origin", // Only send full referrer for same-origin requests
    },
    hsts: {
      maxAge: 31536000, // Enforce HTTPS for one year
      includeSubDomains: true, // Apply to all subdomains
      preload: true, // Add to the HSTS preload list
    },
    dnsPrefetchControl: {
      allow: false, // Disable DNS prefetching
    },
    hidePoweredBy: true, // Remove "X-Powered-By: Express" header
    xssFilter: true, // Add X-XSS-Protection header
    noSniff: true, // Prevent browsers from sniffing MIME types
    ieNoOpen: true, // Add X-Download-Options header for IE8+
    crossOriginEmbedderPolicy: true, // Block cross-origin resources in <iframe>
    crossOriginOpenerPolicy: {
      policy: "same-origin", // Mitigate cross-origin attacks like Spectre
    },
    crossOriginResourcePolicy: {
      policy: "same-origin", // Restrict cross-origin resource sharing
    },
  })
);

// Base Route Endpoint
server.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to (kunalchandradas.tech) backend server",
    owner: "Kunal Chandra Das.",
    admin: "adinportal.kunalchandradas.tech",
    main: "kunalchandradas.tech",
    route: "Home",
  });
});

// Register routers
server.use("/api/v2/dashboard", dashboardRouter); // Contacts routes
server.use("/api/v2/auth/admin", admiAuthenticationRouter); // Admin authentication routes
server.use("/api/v2/all/projects", projectsRouter); // Projects routes
server.use("/api/v2/reviews", reviewsRouter); // Reviews routes
server.use("/api/v2/resume", resumeRouter); // Resume routes
server.use("/api/v2/blogs", blogRouter); // Blogs routes
server.use("/api/v2/contacts", contactsRouter); // Contacts routes
// Error handling middleware
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof multer.MulterError) {
    // Handle Multer-specific errors
    res.status(500).send(err.message);
  } else if (err) {
    // Handle other errors
    res.status(400).send(err.message);
  } else {
    next(); // Pass to the next middleware if no error
  }
});

export default server;
