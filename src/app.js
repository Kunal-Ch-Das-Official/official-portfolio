/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : this is the application file to get all request and process then send response to client.
 Date : 20.06.2024 
 */
 const express = require('express');
 const { json } = require('express');
 const cors = require('cors');
const projectRouter = require('./routes/projectsRouter');
const bodyParser = require("body-parser");
const app = express();




// Middlewere
app.use(cors());
app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// slash route 
app.get("/", (req, res) => {
  res.send("server is connected");
});

// project route 
app.use('/api/project/v1', projectRouter);


module.exports = app;