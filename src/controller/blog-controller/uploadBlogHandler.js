/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the post blogs.
 Date : 29.07.2024 
 */

const fs = require("fs");
const path = require("path"); // Importing path module for safer path handling
const blogModel = require("../../models/blogModel");
const cloudConfig = require("../../config/cloudConfig");

const uploadBlogsHandler = async (req, res) => {
  try {
    // Check if the request body and file are provided
    if (req.body && req.file) {
      // Ensure the file path is valid
      const filePath = req.file.path;
      if (!filePath) {
        return res.status(400).json({ error: "File path is invalid!" });
      }

      // Upload the file to cloud storage
      const blogImage = await cloudConfig.uploader.upload(filePath, {
        folder: "blog_image",
      });

      // Create and save the blog entry
      const blogInfo = new blogModel({
        blogTitle: req.body.blogTitle,
        authorName: req.body.authorName,
        supportingImg: blogImage.secure_url,
        supportingImgPublicId: blogImage.public_id,

        statementHeading: req.body.statementHeading,
        statement: req.body.statement,
        corespondingCode: req.body.corespondingCode,
        commandLine: req.body.commandLine,

      });

      await blogInfo.save();
      res.status(200).json({ message: "Blog uploaded successfully!" });

      // Delete the file from local folder
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting the file from local folder:", err);
        } else {
          console.log("File successfully deleted!");
        }
      });
    } else {
      res
        .status(400)
        .json({ error: "Bad Request! Missing file or body content." });
    }
  } catch (error) {
    console.error("Error occurred during blog upload:", error);
    res.status(500).json({
      response: "Unable to upload due to a technical error!",
      Error: error.message,
    });
  }
};

module.exports = uploadBlogsHandler;
