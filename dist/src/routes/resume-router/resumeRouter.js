"use strict";
/**
 * This file contains the routes for handling resume-related
 * actions in the system. The router defines the HTTP endpoints
 * for uploading, retrieving, updating, and deleting resumes.
 *
 * 1. **GET /resumes**: Retrieves a list of all resumes uploaded
 *    to the system (accessible to all users).
 * 2. **GET /resumes/:id**: Retrieves a specific resume by its
 *    unique ID (accessible to all users).
 * 3. **POST /resumes**: Allows authenticated users to upload
 *    a new resume to the system.
 * 4. **PATCH /resumes/:id**: Allows authenticated users to
 *    update an existing resume.
 * 5. **DELETE /resumes/:id**: Allows authenticated users to
 *    delete a specific resume by its ID.
 *
 * The router ensures proper handling of resume data, including
 * validation, authentication (e.g., all write actions require authentication),
 * and authorization where necessary.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadResume_1 = __importDefault(require("../../controllers/resume/uploadResume"));
const multerUploader_1 = __importDefault(require("../../middlewares/muter/multerUploader"));
const updateResume_1 = __importDefault(require("../../controllers/resume/updateResume"));
const deleteResume_1 = __importDefault(require("../../controllers/resume/deleteResume"));
const getResume_1 = __importDefault(require("../../controllers/resume/getResume"));
const authValidator_1 = __importDefault(require("../../middlewares/auth-validator/authValidator"));
const resumeRouter = (0, express_1.Router)();
resumeRouter.post("/kunal-chandra-das", authValidator_1.default.validate, multerUploader_1.default.single("resumeUrl"), uploadResume_1.default.uploadCtrl);
resumeRouter.put("/kunal-chandra-das/:id", authValidator_1.default.validate, multerUploader_1.default.single("resumeUrl"), updateResume_1.default.updateCtrl);
resumeRouter.delete("/kunal-chandra-das/:id", authValidator_1.default.validate, deleteResume_1.default.deleteCtrl);
resumeRouter.get("/kunal-chandra-das/:id", getResume_1.default.getCtrl);
resumeRouter.get("/kunal-chandra-das", getResume_1.default.getCtrl);
exports.default = resumeRouter;
