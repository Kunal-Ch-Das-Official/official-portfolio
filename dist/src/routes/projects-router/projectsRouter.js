"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Projects router
 * Author      : Kunal Chandra Das
 * Date        : 05.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the routes for managing projects in the
 *               system. The router defines the HTTP endpoints for creating,
 *               retrieving, updating, and deleting projects.
 *
 *               1. **GET /projects**: Retrieves a list of all projects (accessible to all users).
 *               2. **GET /projects/:id**: Retrieves a specific project by its unique ID (accessible to all users).
 *               3. **POST /projects**: Allows authenticated users (admins) to create a new project by submitting project details.
 *               4. **PATCH /projects/:id**: Allows authenticated users (admins) to update details of an existing project.
 *               5. **DELETE /projects/:id**: Allows authenticated users (admins) to delete a specific project by its ID.
 *
 *               The router ensures proper project data handling, including
 *               validation, authentication, and authorization checks where
 *               necessary (e.g., only authenticated admins can create, update, or delete projects).
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadNewProject_1 = __importDefault(require("../../controllers/projects/uploadNewProject"));
const multerUploader_1 = __importDefault(require("../../middlewares/muter/multerUploader"));
const authValidator_1 = __importDefault(require("../../middlewares/auth-validator/authValidator"));
const updateProject_1 = __importDefault(require("../../controllers/projects/updateProject"));
const deleteProject_1 = __importDefault(require("../../controllers/projects/deleteProject"));
const getProject_1 = __importDefault(require("../../controllers/projects/getProject"));
const projectsRouter = (0, express_1.Router)();
const requiredProjectImage = multerUploader_1.default.fields([
    { name: "projectLogoUrl", maxCount: 1 },
    { name: "firstPageImageUrl", maxCount: 1 },
    { name: "secondPageImageUrl", maxCount: 1 },
    { name: "thirdPageImageUrl", maxCount: 1 },
]);
//1. Upload new project route
projectsRouter.post("/operation/url", authValidator_1.default.validate, requiredProjectImage, uploadNewProject_1.default.uploadCtrl);
//2. Update existing project route
projectsRouter.patch("/operation/url/:id", authValidator_1.default.validate, requiredProjectImage, updateProject_1.default.updateCtrl);
//3. Delete existing project route
projectsRouter.delete("/operation/url/:id", authValidator_1.default.validate, deleteProject_1.default.deleteCtrl);
//4. get all projects route
projectsRouter.get("/operation/url", getProject_1.default.getProjectCtrl);
//5. get single projects route
projectsRouter.get("/operation/url/:id", getProject_1.default.getProjectCtrl);
exports.default = projectsRouter;
