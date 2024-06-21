/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : this is the resume model to download resume in client side.
 Date : 21.06.2024 
 */
 const mongoose = require("mongoose");
 const { Schema } = require("mongoose");
 
 const ResumeSchema = new Schema(
   {
    resume: {
       type: String,
       required: true,
     },
     status: {
       type: Boolean,
       default: 1,
     },
   },
   { timestamps: true }
 );
 
 const resumeModel = mongoose.model("resume", ResumeSchema);
 
 module.exports = resumeModel;
 