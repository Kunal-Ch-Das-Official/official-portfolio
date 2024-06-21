/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is multer config file for resume upload.
 Date : 21.06.2024 
 */


 const multer = require("multer");
 const { v4: uuidv4 } = require("uuid");
 
 const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, "./uploads");
   },
   filename: function (req, file, cb) {
     const random = uuidv4();
     cb(null, random + "" + file.originalname);
   },
 });
 
 // Define the file filter function
 const fileFilter = (req, file, cb) => {
   // Accept only image files (jpeg, png, gif)
   if (file.mimetype === "application/document" || file.mimetype === "application/pdf") {
     cb(null, true);
   } else {
     cb(new Error("Invalid file type. Only PDF and Document files are allowed."), false);
   }
 };
 
 const resumeUpload = multer({ 
   storage: storage,
   fileFilter: fileFilter
 });
 module.exports = resumeUpload;
 