/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the resume edit.
 Date : 21.06.2024 
 */
const cloudConfig = require("../../config/cloudConfig");
const resumeModel = require("../../models/resumeModel");
const fs = require("fs");

const editResumeHandler = async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    try {
        const getCurrentResume = await resumeModel.findById(req.params.id);
        await cloudConfig.uploader.destroy(getCurrentResume.publicId);
        const putNewResume = await cloudConfig.uploader.upload(req.file.path, {
            folder: "resume_uploads",
          });
        const newData = {
            resume: putNewResume.secure_url,
            publicId: putNewResume.public_id
        }
         const updateResume = await resumeModel.findByIdAndUpdate(req.params.id, newData, {new: true})
        if(!updateResume){
            res.status(404).json({ error: "Resume not found!" })
        }else{
            res.status(200).json(updateResume);
        }

              // Delete the file from local storage after uploading to Cloudinary
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.log("There are an error!", err);
        } else {
          console.log("Oldresume deleted successfully!");
        }
      });
    } catch (error) {
        res
        .status(500)
        .json({ error: "Technical error!", details: error.message });
    
    }
}
module.exports = editResumeHandler;