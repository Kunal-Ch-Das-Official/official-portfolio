/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the get single project get request by client or admin.
 Date : 20.06.2024 
 */

const projectModel = require("../../models/projectModel");

const sendSingleProjectHandler = async (req, res) => {
  try {
    const projectId = await projectModel.findById(req.params.id);
    if (!projectId) {
      res.status(404).send("Not found !");
    } else {
      res.status(200).json(projectId);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Technical error!",
        details: error.message,
      });
  }
};
module.exports = sendSingleProjectHandler;
