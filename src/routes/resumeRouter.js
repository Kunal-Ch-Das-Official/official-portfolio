/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is the resume router.
 Date : 21.06.2024 
 */

const express = require('express');
const uploadResumeHandler = require('../controller/resume-controller/uploadResumeHandler');
const resumeUpload = require('../middleware/multerResumeStorage');
const sendResumeHandler = require('../controller/resume-controller/sendResumeHandler');
const editResumeHandler = require('../controller/resume-controller/editResumeHandler');
const deleteResumeHandler = require('../controller/resume-controller/deleteResumeHandler');



const resumeRouter = express.Router();

// Resume Post Route 
resumeRouter.post('/postresume', resumeUpload.single('resume'), uploadResumeHandler);

// Get Resume Route
resumeRouter.get("/getresume/:id", sendResumeHandler);

// Edit Resume Route
resumeRouter.patch("/editresume/:id", resumeUpload.single('resume'), editResumeHandler);

// Delete Resume Route
resumeRouter.delete("/deleteresume/:id", deleteResumeHandler);

module.exports = resumeRouter;