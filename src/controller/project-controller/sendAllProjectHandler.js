/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the all project request by client.
 Date : 20.06.2024 
 */
const projectModel = require("../../models/projectModel");

const sendAllProjectHandler = async (req, res) => {
  try {
    const allProjects = await projectModel.find();
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json({
      error: "Failed to respond !",
      message: error.message,
    });
  }
};
module.exports = sendAllProjectHandler;
