/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the single resume get request by client.
 Date : 20.06.2024 
 */

 
const resumeModel = require("../../models/resumeModel");

 const sendSingleResumeHandler = async (req, res) => {
   try {
     const resumeId = await resumeModel.findById(req.params.id);
     if (!resumeId) {
       res.status(404).send("Not found!");
     } else {
       res.status(200).json(resumeId);
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
 module.exports = sendSingleResumeHandler;