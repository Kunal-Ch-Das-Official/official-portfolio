/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the resume delete.
 Date : 21.06.2024 
 */

const cloudConfig = require("../../config/cloudConfig");
const resumeModel = require("../../models/resumeModel");

const deleteResumeHandler = async(req, res) => {

    try {
        const deleteResume = await resumeModel.findById(req.params.id);
        await cloudConfig.uploader.destroy(deleteResume.publicId);
        await resumeModel.deleteOne({ _id: req.params.id });
        if(!deleteResume){
           return res.status(404).json({ error: "Resume not found!" });
        } else {
          res.status(200).json({ message: "Resume deleted successfully!" });
        }
        
    } catch (error) {
        res
      .status(500)
      .json({ error: "Failed to delete resume", details: error.message });
  }
}

module.exports = deleteResumeHandler;