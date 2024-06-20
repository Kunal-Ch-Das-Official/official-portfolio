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
  const projectPathArray = [
    req.files.projectThumbnail[0].path,
    req.files.firstView[0].path,
    req.files.secondView[0].path,
    req.files.thirdView[0].path,
  ];
  // Cloudinary Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  // Assuming projectPathArray is an array of file paths
  const allUploadResults = []; // Initialize an empty array

  for (const path of projectPathArray) {
    try {
      const uploadResult = await cloudinary.uploader.upload(path);
      allUploadResults.push(uploadResult); // Add each uploadResult to the array
    } catch (error) {
      console.log(error);
    }
  }

  console.log(allUploadResults[0].secure_url); // Now allUploadResults contains all the upload results

  try {
    const toBePost = new projectModel({
      projectName: req.body.projectName,
      author: req.body.author,
      description: req.body.description,
      projectThumbnail: allUploadResults[0].secure_url,
      firstView: allUploadResults[1].secure_url,
      secondView: allUploadResults[2].secure_url,
      thirdView: allUploadResults[3].secure_url,
      projectUrl: req.body.projectUrl,
      githubLink: req.body.githubLink,
    });

    await toBePost.save();
    res.status(200).send("Successful!!!");
  } catch (error) {
    res.status(400).send("Bad Request!");
    console.log("Some error occured!!!", error);
  }

  fs.unlink(projectPathArray[0], (err) => {
    if (err) {
      console.log("There are an error!", err);
    } else {
      console.log("Project thumbnail deleted successfully!");
    }
  });

  fs.unlink(projectPathArray[1], (err) => {
    if (err) {
      console.log("There are an error!", err);
    } else {
      console.log("First view deleted successfully!");
    }
  });

  fs.unlink(projectPathArray[2], (err) => {
    if (err) {
      console.log("There are an error!", err);
    } else {
      console.log("Second view deleted successfully!");
    }
  });

  fs.unlink(projectPathArray[3], (err) => {
    if (err) {
      console.log("There are an error!", err);
    } else {
      console.log("Third view deleted successfully!");
    }
  });
};

module.exports = uploadProjectHandler;
