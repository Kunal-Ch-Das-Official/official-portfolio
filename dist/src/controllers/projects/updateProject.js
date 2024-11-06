"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Update project
 * Author      : Kunal Chandra Das
 * Date        : 05.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for updating an existing
 *               project in the system. The controller allows authorized users
 *               (e.g., admins or project owners) to modify the details of an
 *               existing project, including fields such as project name,
 *               description, status, milestones, and associated files.
 *
 *               The controller first checks if the user making the request
 *               has the necessary authorization to update the project. This
 *               typically involves verifying that the user is either the project
 *               owner or an admin. If the user is not authorized, a `403 Forbidden`
 *               response is returned.
 *
 *               The controller then attempts to find the project in the database
 *               using the unique project ID provided in the request. If the project
 *               is not found, a `404 Not Found` response is returned, indicating
 *               that the project does not exist.
 *
 *               If the project exists and the user is authorized to update it,
 *               the controller proceeds to update the project fields with the
 *               new data provided in the request body. The update operation
 *               may involve updating project metadata such as name, description,
 *               or other attributes. Once the update is successful, a `200 OK`
 *               response is returned with the updated project details.
 *
 *               If the request is missing required fields or contains invalid data,
 *               the controller returns a `400 Bad Request` response with an appropriate
 *               error message detailing what went wrong.
 *
 *               In case of any errors during the update process (e.g., database issues),
 *               the controller returns a `500 Internal Server Error` response.
 *
 *               This controller is essential for keeping project data up-to-date,
 *               allowing users to modify their project details and reflect any changes
 *               in the project's lifecycle, status, or associated data.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudUploader_1 = __importDefault(require("../../utils/cloud-uploader/cloudUploader"));
const projectsCollection_1 = __importDefault(require("../../models/projectsCollection"));
const cloudDestroyer_1 = __importDefault(require("../../utils/cloud-destroyed/cloudDestroyer"));
class ExistingProject {
    updateCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const files = req.files;
                let techStack;
                let uploader = new cloudUploader_1.default();
                let destroyer = new cloudDestroyer_1.default();
                let previousProject = yield projectsCollection_1.default.findById(id);
                let projectLogoPath = files.projectLogoUrl;
                let firstPageImagePath = files.firstPageImageUrl;
                let secondPageImagePath = files.secondPageImageUrl;
                let thirdPageImagePath = files.thirdPageImageUrl;
                let projectLogoUrl;
                let firstPageImageUrl;
                let secondPageImageUrl;
                let thirdPageImageUrl;
                if (projectLogoPath !== undefined) {
                    projectLogoUrl = yield uploader.uploadSingle(projectLogoPath[0].buffer, "all_projects");
                }
                if (firstPageImagePath !== undefined) {
                    firstPageImageUrl = yield uploader.uploadSingle(firstPageImagePath[0].buffer, "all_projects");
                }
                if (secondPageImagePath !== undefined) {
                    secondPageImageUrl = yield uploader.uploadSingle(secondPageImagePath[0].buffer, "all_projects");
                }
                if (thirdPageImagePath !== undefined) {
                    thirdPageImageUrl = yield uploader.uploadSingle(thirdPageImagePath[0].buffer, "all_projects");
                }
                if (previousProject) {
                    const newProjectLogoUrl = projectLogoPath
                        ? projectLogoUrl === null || projectLogoUrl === void 0 ? void 0 : projectLogoUrl.storedDataAccessUrl
                        : previousProject.projectLogoUrl;
                    const newFirstPageImageUrl = firstPageImagePath
                        ? firstPageImageUrl === null || firstPageImageUrl === void 0 ? void 0 : firstPageImageUrl.storedDataAccessUrl
                        : previousProject.firstPageImageUrl;
                    const newSecondPageImageUrl = secondPageImagePath
                        ? secondPageImageUrl === null || secondPageImageUrl === void 0 ? void 0 : secondPageImageUrl.storedDataAccessUrl
                        : previousProject.secondPageImageUrl;
                    const newThirdPageImageUrl = thirdPageImagePath
                        ? thirdPageImageUrl === null || thirdPageImageUrl === void 0 ? void 0 : thirdPageImageUrl.storedDataAccessUrl
                        : previousProject.thirdPageImageUrl;
                    if (!Array.isArray(req.body.technologyUsed)) {
                        techStack = [req.body.technologyUsed];
                    }
                    const updatedData = {
                        projectName: req.body.projectName
                            ? req.body.projectName
                            : previousProject.projectName,
                        author: req.body.author ? req.body.author : previousProject.author,
                        projectType: req.body.projectType
                            ? req.body.projectType
                            : previousProject.projectType,
                        owner: req.body.owner ? req.body.owner : previousProject.owner,
                        description: req.body.description
                            ? req.body.description
                            : previousProject.description,
                        projectLogoUrl: newProjectLogoUrl,
                        projectLogoPublicId: newProjectLogoUrl
                            ? projectLogoUrl === null || projectLogoUrl === void 0 ? void 0 : projectLogoUrl.storedDataAccessId
                            : previousProject.projectLogoPublicId,
                        firstPageImageUrl: newFirstPageImageUrl,
                        firstPageImagePublicId: newFirstPageImageUrl
                            ? firstPageImageUrl === null || firstPageImageUrl === void 0 ? void 0 : firstPageImageUrl.storedDataAccessId
                            : previousProject.firstPageImagePublicId,
                        secondPageImageUrl: newSecondPageImageUrl,
                        secondPageImagePublicId: newSecondPageImageUrl
                            ? secondPageImageUrl === null || secondPageImageUrl === void 0 ? void 0 : secondPageImageUrl.storedDataAccessId
                            : previousProject.secondPageImagePublicId,
                        thirdPageImageUrl: newThirdPageImageUrl,
                        thirdPageImagePublicId: newThirdPageImageUrl
                            ? thirdPageImageUrl === null || thirdPageImageUrl === void 0 ? void 0 : thirdPageImageUrl.storedDataAccessId
                            : previousProject.thirdPageImagePublicId,
                        liveProjectUrl: req.body.liveProjectUrl
                            ? req.body.liveProjectUrl
                            : previousProject.liveProjectUrl,
                        githubRepoUrl: req.body.githubRepoUrl
                            ? req.body.githubRepoUrl
                            : previousProject.githubRepoUrl,
                        technologyUsed: req.body.technologyUsed
                            ? req.body.technologyUsed
                            : previousProject.technologyUsed,
                    };
                    projectLogoUrl &&
                        (yield destroyer.cloudAssets(previousProject.projectLogoPublicId));
                    firstPageImageUrl &&
                        (yield destroyer.cloudAssets(previousProject.firstPageImagePublicId));
                    secondPageImageUrl &&
                        (yield destroyer.cloudAssets(previousProject.secondPageImagePublicId));
                    thirdPageImageUrl &&
                        (yield destroyer.cloudAssets(previousProject.thirdPageImagePublicId));
                    const updateProject = yield projectsCollection_1.default.findByIdAndUpdate(id, updatedData, { new: true });
                    if (updateProject) {
                        return res.status(200).json({
                            message: "Patch successful!",
                            details: "Requested resources updated successfully.",
                        });
                    }
                    else {
                        return res.status(501).json({
                            message: "Not Implemented!",
                            details: "Something went wrong please try again later.",
                        });
                    }
                }
                else {
                    return res.status(404).json({
                        issue: "Not Found!",
                        details: "Requested project are not found",
                    });
                }
            }
            catch (error) {
                return res.status(500).json({
                    issue: "Internal server error!",
                    details: error.message,
                });
            }
        });
    }
}
exports.default = new ExistingProject();
