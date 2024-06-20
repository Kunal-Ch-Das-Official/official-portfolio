/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is the project route handler.
 Date : 20.06.2024 
 */

const express = require('express');
const uploadProjectHandler = require('../controller/project-controller/uploadProjectHandler');
const sendAllProjectHandler = require('../controller/project-controller/sendAllProjectHandler');
const sendSingleProjectHandler = require('../controller/project-controller/sendSingleProjectHandler');
const editProjectHandler = require('../controller/project-controller/editProjecthandler');
const deleteProjectHandler = require('../controller/project-controller/deleteProjectHandler');
const projectRouter = express.Router();

// Upload Projects Route
projectRouter.post('/postproject', uploadProjectHandler);

// Get All Projects Route
projectRouter.get('/projects', sendAllProjectHandler);

// Get Single Project Route
projectRouter.get('/projects/:id', sendSingleProjectHandler);

// Edit Single Project Route
projectRouter.patch('/projects/:id', editProjectHandler);

// Delete Single Project Route
projectRouter.delete('/projects/:id', deleteProjectHandler);




module.exports = projectRouter;