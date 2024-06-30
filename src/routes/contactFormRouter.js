/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is the contact form router.
 Date : 22.06.2024 
 */

 const express = require('express');
const uploadContactInfoHandler = require('../controller/contact-form-controller/uploadContactInfoHandler');
const sendAllContactInfoHandler = require('../controller/contact-form-controller/sendAllContactInfoHandler');
const sendSingleContactInfoHandler = require('../controller/contact-form-controller/sendSingleContactInfoHandler');
const deleteContactInfoHandler = require('../controller/contact-form-controller/deleteContactInfoHandler');


 const contactFormRouter = express.Router();


//  Post contact form 
 contactFormRouter.post('/contact-info-upload', uploadContactInfoHandler);

//  Get all contact info  
 contactFormRouter.get('/contact-info', sendAllContactInfoHandler);

//  Get single contact info 
 contactFormRouter.get('/contact-info/:id', sendSingleContactInfoHandler);

//  delete contact info 
 contactFormRouter.delete('/contact-info-delete/:id', deleteContactInfoHandler);

 module.exports = contactFormRouter;


