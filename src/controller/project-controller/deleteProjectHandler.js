/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the delete project request by client.
 Date : 20.06.2024 
 */

const cloudConfig = require("../../config/cloudConfig");
const projectModel = require("../../models/projectModel");

const deleteProjectHandler = async (req, res) => {
  
  try {
    const findProjectById = await projectModel.findById(req.params.id);
    const allPublicId = [
      findProjectById.projectThumbnailPublicId,
      findProjectById.firstViewPublicId,
      findProjectById.secondViewPublicId,
      findProjectById.thirdViewPublicId
  ]
    const currentPublicId = allPublicId.map((id) => id)
    await cloudConfig.api.delete_resources(currentPublicId);

    const deleteProject = await projectModel.findByIdAndDelete(req.params.id);
    if (!deleteProject) {
      return res.status(404).json({ error: "Project not found!" });
    } else {
      res.status(200).json({ message: "Project deleted successfully!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete project", details: error.message });
  }
};

module.exports = deleteProjectHandler;
