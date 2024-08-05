/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the project post request by admin.
 Date : 20.06.2024 
 */

const cloudConfig = require("../../config/cloudConfig");
const projectModel = require("../../models/projectModel");
const fs = require("fs");

const uploadProjectHandler = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const projectPathArray = [
    req.files.projectThumbnail[0].path,
    req.files.firstView[0].path,
    req.files.secondView[0].path,
    req.files.thirdView[0].path,
  ];

  // Assuming projectPathArray is an array of file paths
  const allUploadResults = []; // Initialize an empty array

  for (const path of projectPathArray) {
    try {
      const uploadResult = await cloudConfig.uploader.upload(path, {
        folder: "projects_upload",
      });
      allUploadResults.push(uploadResult); // Add each uploadResult to the array
      console.log(uploadResult);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    let technologyUsed = req.body.technologyUsed;
    if (!Array.isArray(technologyUsed)) {
      technologyUsed = [technologyUsed];
    }

    const toBePost = new projectModel({
      projectName: req.body.projectName,
      author: req.body.author,
      projectType: req.body.projectType,
      owner: req.body.owner,
      description: req.body.description,
      projectThumbnail: allUploadResults[0].secure_url,
      projectThumbnailPublicId: allUploadResults[0].public_id,
      firstView: allUploadResults[1].secure_url,
      firstViewPublicId: allUploadResults[1].public_id,
      secondView: allUploadResults[2].secure_url,
      secondViewPublicId: allUploadResults[2].public_id,
      thirdView: allUploadResults[3].secure_url,
      thirdViewPublicId: allUploadResults[3].public_id,
      projectUrl: req.body.projectUrl,
      githubLink: req.body.githubLink,
      technologyUsed: technologyUsed,
    });

    await toBePost.save();
    res.status(200).send("Successfully upload projects on database!!!");
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
