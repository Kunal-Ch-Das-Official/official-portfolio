/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the get all project request by client or admin.
 Date : 20.06.2024 
 */
const projectModel = require("../../models/projectModel");

const sendAllProjectHandler = async (req, res) => {
  try {
    const allProjects = await projectModel.find();
    if(!allProjects){
      res.status(404).json({error: "Not found!"});
    }else{
    res.status(200).json(allProjects);
    }
  } catch (error) {
    res.status(500).json({
      error: "Technical error!",
      message: error.message,
    });
  }
};
module.exports = sendAllProjectHandler;
