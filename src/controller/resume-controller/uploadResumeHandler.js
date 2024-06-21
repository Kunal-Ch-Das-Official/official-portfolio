/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the post resume.
 Date : 21.06.2024 
 */

require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const resumeModel = require("../../models/resumeModel");

const uploadResumeHandler = async (req, res) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  try {
    if (req.file) {
      // File uploaded locally, now upload to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "resume_uploads",
      });

      const previousPublicId = result.public_id;
      module.exports = previousPublicId;
      
      // Delete the file from local storage after uploading to Cloudinary
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.log("There are an error!", err);
        } else {
          console.log("Resume deleted successfully!");
        }
      });

      try {
        const sendToDatabase = new resumeModel({
          resume: result.secure_url,
        });
        await sendToDatabase.save();
        res.status(200).send("Successfully upload resume on database!!!");
      } catch (error) {
        res.status(400).send("Bad Request!");
        console.log("Some error occured to post resume on database!!!", error);
      }
    } else {
      res.status(500).send("Bad Request");
    }
  } catch (error) {
    console.log("Error Occure", error);
  }
  
};

module.exports = uploadResumeHandler;

