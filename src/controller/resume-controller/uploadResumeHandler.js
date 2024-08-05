/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the post resume.
 Date : 21.06.2024 
 */


const fs = require("fs");
const resumeModel = require("../../models/resumeModel");
const cloudConfig = require("../../config/cloudConfig");

const uploadResumeHandler = async (req, res) => {
  try {
    if (req.file) {
      // File uploaded locally, now upload to Cloudinary
      const result = await cloudConfig.uploader.upload(req.file.path, {
        folder: "resume_uploads",
      
        });

      
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
          publicId: result.public_id
        });
        await sendToDatabase.save();
        res.status(200).send("Successfully upload resume on database!!!");
      } catch (error) {
        res.status(400).send("Bad Request!");
        console.log("Some error occured to post resume on database!!!", error);
      }
    } else {
      res.status(500).send("Technical error!");
    }
  } catch (error) {
    console.log("Error Occure", error);
  }
  
};

module.exports = uploadResumeHandler;

