/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : this is the resume model of user reviews.
 Date : 21.06.2024 
 */
 const mongoose = require('mongoose');

 const reviewSchema = new mongoose.Schema({
   userName: {
     type: String,
     required: true
   },
   reviewContent: {
     type: String,
     required: true
   },
   rating: {
     type: Number,
     required: true,
     min: 1,
     max: 5
   },
   date: {
     type: Date,
     default: Date.now
   },
   status: {
    type: Boolean,
    default: 1,
  }
 });
 
 const reviewModel = mongoose.model('Review', reviewSchema);
 
 module.exports = reviewModel;
 
 