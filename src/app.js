/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : this is the application file to get all request and process then send response to client.
 Date : 20.06.2024 
 */
const express = require("express");
const { json } = require("express");
const cors = require("cors");
const projectRouter = require("./routes/projectsRouter");
const bodyParser = require("body-parser");
const resumeRouter = require("./routes/resumeRouter");
const multer = require("multer");
const app = express();

// Middlewere
app.use(cors());
app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// slash route
app.get("/", (req, res) => {
  res.json({
    message: "welcome to kunal chandra das portfolio.",
    status: 200,
  });
});

// Project route
app.use("/api/project/v1", projectRouter);

// Resume route
app.use("/api/resume/v1", resumeRouter);

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Handle Multer-specific errors
    res.status(500).send(err.message);
  } else if (err) {
    // Handle other errors
    res.status(400).send(err.message);
  }
});


module.exports = app;
