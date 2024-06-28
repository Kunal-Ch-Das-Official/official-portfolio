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
const sendSingleResumeHandler = require('../controller/resume-controller/sendSingleResumeHandler');



const resumeRouter = express.Router();

// Resume Post Route 
resumeRouter.post('/resume-upload', resumeUpload.single('resume'), uploadResumeHandler);

// Get Resume Route
resumeRouter.get("/resume", sendResumeHandler);

resumeRouter.get("/resume/:id", sendSingleResumeHandler);

// Edit Resume Route
resumeRouter.put("/resume-edit/:id", resumeUpload.single('resume'), editResumeHandler);

// Delete Resume Route
resumeRouter.delete("/resume-delete/:id", deleteResumeHandler);

module.exports = resumeRouter;