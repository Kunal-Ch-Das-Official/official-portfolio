/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is the Blog router.
 Date : 27.07.2024 
 */

const express = require("express");
const uploadBlogsHandler = require("../controller/blog-controller/uploadBlogHandler");
const blogImageUpload = require("../middleware/multerBlogStorage");
const sendAllBlogHandler = require("../controller/blog-controller/sendAllBlogHandler");
const sendSingleBlogHandler = require("../controller/blog-controller/sendSingleBlogHandler");
const editBlogHandler = require("../controller/blog-controller/editBlogHandler");
const deleteBlogHandler = require("../controller/blog-controller/deleteBlogHandler");

const blogRouter = express.Router();

//  Post blog route
blogRouter.post("/blog-upload", blogImageUpload.single('supportingImg'), uploadBlogsHandler);

//  Get all blog route
blogRouter.get("/blogs", sendAllBlogHandler);

// Get single blog route
blogRouter.get("/blog/:id", sendSingleBlogHandler);

// Edit blog post route
blogRouter.patch("/blog-edit/:id", blogImageUpload.single('supportingImg'), editBlogHandler);

// Delete blog route
blogRouter.delete("/blog-delete/:id", deleteBlogHandler);

module.exports = blogRouter;
