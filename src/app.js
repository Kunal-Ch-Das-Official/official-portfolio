/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : this is the application file to get all request and process then send response to client.
 Date : 20.06.2024 
 */
 const express = require('express');
 const { json } = require('express');
 const cors = require('cors');



const app = express();

// Middlewere
app.use(cors());
app.use(json());


app.get("/", (req, res) => {
  res.send("server is connected");
});


module.exports = app;