/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller for delete blog posts by admin.
 Date : 29.07.2024 
 */

const cloudConfig = require("../../config/cloudConfig");
const blogModel = require("../../models/blogModel");

const deleteBlogHandler = async (req, res) => {
  try {
    const targetedBlog = await blogModel.findById(req.params.id);
    if (!targetedBlog) {
      res.status(404).json({
        Error: "Requested resources are not found!",
      });
    } else {
      const blogToBeDelete = await blogModel.findByIdAndDelete(req.params.id);
      await cloudConfig.uploader.destroy(blogToBeDelete.supportingImgPublicId);
      res.status(200).json({
        message: "Blog has been successfully deleted!",
      });
    }
  } catch (error) {
    console.log("Unable to delete the blog due to some error", error.message);
    res.status(500).json({
      Error: "Unable to delete the blog due to technical error!",
      details: error.message,
    });
  }
};

module.exports = deleteBlogHandler;
