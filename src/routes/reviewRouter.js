/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is the review router.
 Date : 22.06.2024 
 */

 const express = require('express');
const uploadReviewHandler = require('../controller/review-controller/uploadReviewHandler');
const sendAllReviewHandler = require('../controller/review-controller/sendAllReviewHandler');
const sendSingleReviewHandler = require('../controller/review-controller/sendSingleReviewHandler');
const editReviewHandler = require('../controller/review-controller/editReviewHandler');
const deleteReviewHandler = require('../controller/review-controller/deleteReviewHandler');

 const reviewRouter = express.Router();

//  Post review router 
 reviewRouter.post('/review-upload', uploadReviewHandler);

//  Get reviews router 
reviewRouter.get('/reviews', sendAllReviewHandler);

// Get single review 
reviewRouter.get('/reviews/:id', sendSingleReviewHandler);

// Get single review 
reviewRouter.patch('/review-edit/:id', editReviewHandler);

// Delete single review 
reviewRouter.delete('/review-delete/:id', deleteReviewHandler);


module.exports = reviewRouter;