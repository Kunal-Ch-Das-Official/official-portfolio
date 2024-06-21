/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the resume delete.
 Date : 21.06.2024 
 */

const resumeModel = require("../../models/resumeModel");

const deleteResumeHandler = async(req, res) => {

    try {
        const deleteResume = await resumeModel.findByIdAndDelete(req.params.id);
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