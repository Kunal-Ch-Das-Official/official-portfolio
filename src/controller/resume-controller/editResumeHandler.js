/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the resume edit.
 Date : 21.06.2024 
 */
const resumeModel = require("../../models/resumeModel");


const editResumeHandler = async(req, res) => {
  
    try {
        const updateResume = await resumeModel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true, runValidators: true}
        );
        if(!updateResume){
            res.status(404).json({ error: "Resume not found!" })
        }else{
            res.status(200).json(updateResume);
        }
    } catch (error) {
        res
        .status(400)
        .json({ error: "Failed to update the resume!", details: error.message });
    
    }
}
module.exports = editResumeHandler;