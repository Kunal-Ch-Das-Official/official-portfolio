/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the send blog to the client.
 Date : 29.07.2024 
 */

const blogModel = require("../../models/blogModel");

const sendAllBlogHandler = async (req, res) => {
  try {
    const allBlogs = await blogModel.find();
    if (!allBlogs) {
      res.status(404).json({
        error: "Blogs are not found!!",
      });
    } else {
      res.status(200).json(allBlogs);
    }
  } catch (error) {
    console.log(
      "Unable to fetch blogs due to some technical error:",
      error.message
    );
    res.status(500).json({
      message: "Unable to fetch blogs due to some technical error",
      reason: error.message,
    });
  }
};

module.exports = sendAllBlogHandler;
