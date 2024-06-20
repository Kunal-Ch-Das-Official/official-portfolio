/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the edit project request by client.
 Date : 20.06.2024 
 */

const projectModel = require("../../models/projectModel");

const editProjectHandler = async (req, res) => {
  try {
    const updateProjects = await projectModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updateProjects) {
      return res.status(404).json({ error: "Project not found!" });
    } else {
      res.status(200).json(updateProjects);
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to update the project!", details: error.message });
  }
};
module.exports = editProjectHandler;
