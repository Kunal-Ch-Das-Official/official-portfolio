/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the project post request by client.
 Date : 20.06.2024 
 */

require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const projectModel = require("../../models/projectModel");
const fs = require("fs");

const uploadProjectHandler = async (req, res) => {
  // Cloudinary Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  // Upload an image

    let uploadResult = await cloudinary.uploader
      .upload(req.file.path)
      .catch((error) => {
        console.log(error);
      });
    console.log(uploadResult);
    res.send("ok");
  
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.log("There are an error!", err);
      } else {
        console.log("deleted successfully!");
      }
    });

  try {
    const toBePost = new projectModel({
        projectName: req.body.projectName,
        author: req.body.author,
        description: req.body.description,
        projectThumbnail: uploadResult.secure_url,
        projectUrl: req.body.projectUrl,
        githubLink: req.body.githubLink
    });

    await toBePost.save();
    res.status(200).send("Successful!!!");

  } catch (error) {
    console.log("Some error occured!!!");
    res.status(400).send('Bad Request!');
  }




};

module.exports = uploadProjectHandler;
