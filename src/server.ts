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

import express, { Request, Response, Application } from "express";
import { json } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import admiAuthenticationRouter from "./routes/auth-router/authRouter";
// import multer from "multer";

const server: Application = express();

// Middlewere
server.use(cors());
server.use(json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// slash route
server.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to (kunalchandradas.tech) backend server",
    owner: "Kunal Chandra Das.",
    admin: "adinportal.kunalchandradas.tech",
    main: "kunalchandradas.tech",
    route: "Home",
  });
});

// Register admin authentication router
server.use("/api/v2/auth/admin", admiAuthenticationRouter);

//  app.use((err, req, res, next) => {
//    if (err instanceof multer.MulterError) {
//      // Handle Multer-specific errors
//      res.status(500).send(err.message);
//    } else if (err) {
//      // Handle other errors
//      res.status(400).send(err.message);
//    }
//  });

export default server;
