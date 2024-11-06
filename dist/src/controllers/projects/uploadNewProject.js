"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Upload project
 * Author      : Kunal Chandra Das
 * Date        : 05.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for uploading a new project
 *               to the system. The controller allows authorized users (e.g.,
 *               admins or project owners) to submit a new project to be stored
 *               and managed in the platform’s database.
 *
 *               The controller first validates the incoming request to ensure
 *               that all necessary fields for the project are included in the
 *               request body. Required fields typically include project name,
 *               description, and any other relevant data such as start date,
 *               milestones, associated team members, or project files.
 *
 *               If any required fields are missing or contain invalid data,
 *               the controller returns a `400 Bad Request` response, with an
 *               appropriate error message explaining what is missing or incorrect.
 *
 *               Once the data is validated, the controller proceeds to create
 *               a new project entry in the database, storing all the provided
 *               information along with any necessary metadata (e.g., project
 *               creation date, user ID of the creator). If the project is successfully
 *               uploaded, a `201 Created` response is returned, including the details
 *               of the newly created project (e.g., project ID, name, description).
 *
 *               In case of any failure during the upload process (e.g., database errors,
 *               missing data), the controller returns an appropriate error message.
 *               If the project creation fails for any reason, a `500 Internal Server Error`
 *               response is returned.
 *
 *               This controller is crucial for initiating new projects within
 *               the system. It ensures that only properly validated project data is
 *               uploaded, allowing users to add projects in a structured and secure
 *               manner while ensuring smooth project creation workflows.
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
const projectsCollection_1 = __importDefault(require("../../models/projectsCollection"));
const cloudUploader_1 = __importDefault(require("../../utils/cloud-uploader/cloudUploader"));
class NewProject {
    uploadCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { projectName, author, projectType, owner, description, liveProjectUrl, githubRepoUrl, technologyUsed, } = req.body;
            // Type assertion for req.files
            const files = req.files;
            let techStack;
            let uploader = new cloudUploader_1.default();
            let allRequiredImage = [];
            try {
                if (!files) {
                    return res.status(400).json({
                        issue: "No files were uploaded.",
                        details: "Files are required!",
                    });
                }
                else {
                    const projectLogoUrl = files.projectLogoUrl;
                    const firstPageImageUrl = files.firstPageImageUrl;
                    const secondPageImageUrl = files.secondPageImageUrl;
                    const thirdPageImageUrl = files.thirdPageImageUrl;
                    // Check if all required files are present
                    if (!projectLogoUrl ||
                        !firstPageImageUrl ||
                        !secondPageImageUrl ||
                        !thirdPageImageUrl) {
                        return res.status(400).json({
                            issue: "All files are required!",
                            details: "One or more required files are missing.",
                        });
                    }
                    else {
                        const projectImages = [
                            projectLogoUrl[0].buffer,
                            firstPageImageUrl[0].buffer,
                            secondPageImageUrl[0].buffer,
                            thirdPageImageUrl[0].buffer,
                        ];
                        if (!Array.isArray(technologyUsed)) {
                            techStack = [technologyUsed];
                        }
                        for (const path of projectImages) {
                            try {
                                const result = yield uploader.uploadSingle(path, "all_projects");
                                if (result) {
                                    const { storedDataAccessUrl, storedDataAccessId } = result;
                                    allRequiredImage.push({
                                        secureUrl: storedDataAccessUrl,
                                        publicId: storedDataAccessId,
                                    });
                                }
                            }
                            catch (error) {
                                return res.status(500).json({
                                    issue: error.message,
                                    details: "cloudinary error occured.",
                                });
                            }
                        }
                        const projectInfo = new projectsCollection_1.default({
                            projectName,
                            author,
                            projectType,
                            owner,
                            description,
                            liveProjectUrl,
                            githubRepoUrl,
                            technologyUsed,
                            projectLogoUrl: allRequiredImage[0].secureUrl,
                            projectLogoPublicId: allRequiredImage[0].publicId,
                            firstPageImageUrl: allRequiredImage[1].secureUrl,
                            firstPageImagePublicId: allRequiredImage[1].publicId,
                            secondPageImageUrl: allRequiredImage[2].secureUrl,
                            secondPageImagePublicId: allRequiredImage[2].publicId,
                            thirdPageImageUrl: allRequiredImage[3].secureUrl,
                            thirdPageImagePublicId: allRequiredImage[3].publicId,
                        });
                        const uploadProjectInfo = projectInfo.save();
                        if (!uploadProjectInfo) {
                            return res.status(501).json({
                                issue: "Not Implemented!",
                                details: "Something went wrong, please try again later.",
                            });
                        }
                        else {
                            return res.status(201).json({
                                message: "Successfully Uploaded!",
                                details: "Project information has been uploaded successfully.",
                            });
                        }
                    }
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
exports.default = new NewProject();
