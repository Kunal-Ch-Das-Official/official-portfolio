/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller for send single blog.
 Date : 29.07.2024 
 */

const blogModel = require("../../models/blogModel");

const sendSingleBlogHandler = async (req, res) => {
  try {
    const singleBlog = await blogModel.findById(req.params.id);
    if (!singleBlog) {
      res.status(404).json({
        error: "Requested resources are not found!",
      });
    } else {
      res.status(200).json(singleBlog);
    }
  } catch (error) {
    console.log("Technical error", error.message);
    res.status(500).json({
      Error: "Unable to fetch due to some technical error!",
      details: error.message,
    });
  }
};

module.exports = sendSingleBlogHandler;
