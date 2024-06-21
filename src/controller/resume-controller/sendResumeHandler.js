/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the resume get request by client.
 Date : 21.06.2024 
 */
const resumeModel = require("../../models/resumeModel");


const sendResumeHandler = async(req, res) => {
    try {
        const resumeId = await resumeModel.findById(req.params.id);
        if(!resumeId){
            res.status(404).send("Resume not found!!");
        }else{
            res.status(200).json(resumeId)
        }
    } catch (error) {
        res
        .status(500)
        .json({
          error: "Failed to retrieve resume",
          details: error.message,
        });
    }
}
module.exports = sendResumeHandler;