/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of update project by admin.
 Date : 20.06.2024 
 */
const cloudConfig = require("../../config/cloudConfig");
const projectModel = require("../../models/projectModel");
const fs = require("fs");

const editProjectHandler = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  try {
    const updateFields = {};

    // Helper function to handle file updates
    const handleFileUpdate = async (field, req) => {
      if (req.files && req.files[field] === undefined) {
        const findField = await projectModel.findById(req.params.id);
        if (!findField) {
          return res.status(404).send("Project not found");
        }
        updateFields[field] = findField[field];
        updateFields[`${field}PublicId`] = findField[`${field}PublicId`];
      } else {
        const getFieldInfo = await projectModel.findById(req.params.id);
        await cloudConfig.uploader.destroy(getFieldInfo[`${field}PublicId`]);
        const uploadNewImg = await cloudConfig.uploader.upload(
          req.files[field][0].path,
          { folder: "projects_upload" }
        );
        updateFields[field] = uploadNewImg.secure_url;
        updateFields[`${field}PublicId`] = uploadNewImg.public_id;
        fs.unlink(req.files[field][0].path, (err) => {
          if (err) {
            console.log("There was an error!", err);
          } else {
            console.log(`${field} deleted successfully!`);
          }
        });
      }
    };

    // Handle the updates for each file field
    await handleFileUpdate("projectThumbnail", req);
    await handleFileUpdate("firstView", req);
    await handleFileUpdate("secondView", req);
    await handleFileUpdate("thirdView", req);

    // Update the rest of the fields from req.body if not empty
    const findProject = await projectModel.findById(req.params.id);
    if (!findProject) {
      return res.status(404).send("Project not found");
    }

    Object.keys(req.body).forEach((key) => {
      if (req.body[key] === "") {
        updateFields[key] = findProject[key];
      } else {
        updateFields[key] = req.body[key];
      }
    });

    // Update the project with the collected fields
    const updatedProject = await projectModel.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).send("Project not found");
    }

    res.status(200).json({status: 200, message: "Project has been updated successfully!"});
  } catch (error) {
    res.status(500).send(`Technical error: ${error.message}`);
  }
};

module.exports = editProjectHandler;
