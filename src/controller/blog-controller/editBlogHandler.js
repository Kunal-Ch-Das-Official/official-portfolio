/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller for edit blog posts by admin.
 Date : 29.07.2024 
 */

const cloudConfig = require("../../config/cloudConfig");
const blogModel = require("../../models/blogModel");
const fs = require("fs");

const editBlogHandler = async (req, res) => {
  const filePath = req.file.path;
  try {
    const getPrevBlog = await blogModel.findById(req.params.id);
    await cloudConfig.uploader.destroy(getPrevBlog.supportingImgPublicId);
    const uploadnewImage = await cloudConfig.uploader.upload(filePath, {
      folder: "blog_image",
    });

    const updatedBlog = {
      blogTitle: req.body.blogTitle,
      authorName: req.body.authorName,
      supportingImg: uploadnewImage.secure_url,
      supportingImgPublicId: uploadnewImage.public_id,

      statementHeadingOne: req.body.statementHeadingOne,
      statementOne: req.body.statementOne,
      corespondingCodeOne: req.body.corespondingCodeOne,
      commandLineOne: req.body.commandLineOne,

      statementHeadingTwo: req.body.statementHeadingTwo,
      statementTwo: req.body.statementTwo,
      corespondingCodeTwo: req.body.corespondingCodeTwo,
      commandLineTwo: req.body.commandLineTwo,

      statementHeadingThree: req.body.statementHeadingThree,
      statementThree: req.body.statementThree,
      corespondingCodeThree: req.body.corespondingCodeThree,
      commandLineThree: req.body.commandLineThree,

      statementHeadingFour: req.body.statementHeadingFour,
      statementFour: req.body.statementThree,
      corespondingCodeFour: req.body.corespondingCodeFour,
      commandLineFour: req.body.commandLineThree,
    };

    const updateBlog = await blogModel.findByIdAndUpdate(
      req.params.id,
      updatedBlog,
      { new: true }
    );
    if (!updateBlog) {
      res.status(404).json({
        error: "Requested resources are not found",
      });
    } else {
      res.status(200).json(updateBlog);
    }

    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("Unable to delete the file due to:", err);
      } else {
        console.log("File has been successfully deleted!");
      }
    });
  } catch (error) {
    console.log("Unable to update due to some technical error");
    res.status(500).json({
      Error: "unable to update due to some technical error",
      details: error.message,
    });
  }
};

module.exports = editBlogHandler;
