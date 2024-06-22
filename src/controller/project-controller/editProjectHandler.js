/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the edit project request by client.
 Date : 20.06.2024 
 */

const cloudConfig = require("../../config/cloudConfig");
const projectModel = require("../../models/projectModel");
const fs = require("fs");

const editProjectHandler = async (req, res) => {
  try {

    try {
      const updateProjectBody = await projectModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true}
      );
      if (!updateProjectBody) {
        return res.status(404).json({ error: "Project not found!" });
      } else {
        res.status(200).json({status: 200, message: "Succesfully updated!"});
      }
    } catch (error) {
      res
        .status(400)
        .json({ error: "Failed to update the project!", details: error.message });
    }


    // Update Project Thumbnail from Database and cloudinary
    if (!req.files.projectThumbnail) {
      console.log("Thumbnail View Not Been Update!!");
    } else {
      try {
        const getProjectThumbnailInfo = await projectModel.findById(
          req.params.id
        );
        await cloudConfig.uploader.destroy(
          getProjectThumbnailInfo.projectThumbnailPublicId
        );
        const uploadNewImg = await cloudConfig.uploader.upload(
          req.files.projectThumbnail[0].path,
          {
            folder: "projects_upload",
          }
        );
        const updateProjectThumbnail = {
          projectThumbnail: uploadNewImg.secure_url,
          projectThumbnailPublicId: uploadNewImg.public_id,
        };
        await projectModel.findByIdAndUpdate(
          req.params.id,
          updateProjectThumbnail,
          { new: true }
        );
        fs.unlink(req.files.projectThumbnail[0].path, (err) => {
          if (err) {
            console.log("There are an error!", err);
          } else {
            console.log("Thumbnail deleted successfully!");
          }
        });
        res.send("done");
      } catch (error) {
        res.status(500).send("Internal server error", error.message);
      }
    }
    // Update Project FirstView from Database and cloudinary
    if (!req.files.firstView) {
      console.log("First View Not Been Update!!");
    } else {
      try {
        const getFirstViewlInfo = await projectModel.findById(req.params.id);
        await cloudConfig.uploader.destroy(getFirstViewlInfo.firstViewPublicId);
        const uploadNewImg = await cloudConfig.uploader.upload(
          req.files.firstView[0].path,
          {
            folder: "projects_upload",
          }
        );
        const updateFirstView = {
          firstView: uploadNewImg.secure_url,
          firstViewPublicId: uploadNewImg.public_id,
        };
        await projectModel.findByIdAndUpdate(req.params.id, updateFirstView, {
          new: true,
        });
        fs.unlink(req.files.firstView[0].path, (err) => {
          if (err) {
            console.log("There are an error!", err);
          } else {
            console.log("First view deleted successfully!");
          }
        });
      } catch (error) {
        res.status(500).send("Internal server error", error.message);
      }
    }

    // Update Project SecondView from Database and cloudinary
    if (!req.files.secondView) {
      console.log("Second View Not Been Update!!");
    } else {
      try {
        const getSecondViewInfo = await projectModel.findById(req.params.id);
        await cloudConfig.uploader.destroy(
          getSecondViewInfo.secondViewPublicId
        );
        const uploadNewImg = await cloudConfig.uploader.upload(
          req.files.secondView[0].path,
          {
            folder: "projects_upload",
          }
        );
        const updateSecondView = {
          secondView: uploadNewImg.secure_url,
          secondViewPublicId: uploadNewImg.public_id,
        };
        await projectModel.findByIdAndUpdate(req.params.id, updateSecondView, {
          new: true,
        });
        fs.unlink(req.files.secondView[0].path, (err) => {
          if (err) {
            console.log("There are an error!", err);
          } else {
            console.log("Second view deleted successfully!");
          }
        });
      } catch (error) {
        res.status(500).send("Internal server error", error.message);
      }
    }

    // Update Project ThirdView from Database and cloudinary
    if (!req.files.thirdView) {
      console.log("Third View Not Been Update!!");
    } else {
      try {
        const getThirdViewInfo = await projectModel.findById(req.params.id);
        await cloudConfig.uploader.destroy(getThirdViewInfo.thirdViewPublicId);
        const uploadNewImg = await cloudConfig.uploader.upload(
          req.files.thirdView[0].path,
          {
            folder: "projects_upload",
          }
        );
        const updateThirdView = {
          thirdView: uploadNewImg.secure_url,
          thirdViewPublicId: uploadNewImg.public_id,
        };
        await projectModel.findByIdAndUpdate(req.params.id, updateThirdView, {
          new: true,
        });
        fs.unlink(req.files.thirdView[0].path, (err) => {
          if (err) {
            console.log("There are an error!", err);
          } else {
            console.log("Third view deleted successfully!");
          }
        });
      } catch (error) {
        res.status(500).send("Internal server error", error.message);
      }
    }
  } catch (error) {
    res.json({ message: error });
  }


 
};
module.exports = editProjectHandler;
