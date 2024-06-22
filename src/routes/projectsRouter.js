/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is the project router.
 Date : 20.06.2024 
 */

const express = require("express");
const uploadProjectHandler = require("../controller/project-controller/uploadProjectHandler");
const sendAllProjectHandler = require("../controller/project-controller/sendAllProjectHandler");
const sendSingleProjectHandler = require("../controller/project-controller/sendSingleProjectHandler");
const deleteProjectHandler = require("../controller/project-controller/deleteProjectHandler");
const projectsUpload = require("../middleware/multerProjectStorage");
const editProjectHandler = require("../controller/project-controller/editProjectHandler");
const projectRouter = express.Router();

// Cloudinary middleware
// const upload = multer({ dest: 'uploads/' });

const projectUpload = projectsUpload.fields([
  { name: "projectThumbnail", maxCount: 1 },
  { name: "firstView", maxCount: 1 },
  { name: "secondView", maxCount: 1 },
  { name: "thirdView", maxCount: 1 },
]);
// Upload Projects Route
projectRouter.post("/project-post", projectUpload, uploadProjectHandler);

// Get All Projects Route
projectRouter.get("/projects", sendAllProjectHandler);

// Get Single Project Route
projectRouter.get("/projects/:id", sendSingleProjectHandler);

// Edit Single Project Route
projectRouter.patch("/project-edit/:id", projectUpload, editProjectHandler);

// Delete Single Project Route
projectRouter.delete("/project-delete/:id", deleteProjectHandler);

module.exports = projectRouter;
