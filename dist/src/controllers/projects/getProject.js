"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Get single and all projects
 * Author      : Kunal Chandra Das
 * Date        : 05.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for retrieving information
 *               about existing projects in the system. It includes two main
 *               functionalities: fetching all projects and fetching a single
 *               project by its unique identifier (project ID).
 *
 *               The controller has two primary actions:
 *
 *               1. **Get All Existing Projects**:
 *                  The controller retrieves a list of all projects stored in
 *                  the database. The projects are typically returned in a
 *                  paginated format to avoid overwhelming the client with a
 *                  large volume of data. The returned list may include basic
 *                  information about each project, such as project name,
 *                  description, status, and date created.
 *                  If the database query is successful, a `200 OK` response is
 *                  returned, containing the list of projects. If no projects are
 *                  found, an empty list is returned.
 *
 *               2. **Get Single Existing Project**:
 *                  The controller retrieves detailed information about a
 *                  specific project based on the unique project ID provided
 *                  in the request. The response typically includes more in-depth
 *                  information, such as the project's full description, progress,
 *                  associated files, milestones, and other related data.
 *                  If the project is not found in the database, a `404 Not Found`
 *                  response is returned.
 *
 *               In both cases, the controller ensures that the data is returned
 *               securely, handling any errors (e.g., invalid project ID, database
 *               errors) and providing appropriate responses. If there is a failure
 *               in fetching the data, a `500 Internal Server Error` response is
 *               returned.
 *
 *               This controller is essential for enabling users to view both
 *               an overview of all projects in the system as well as detailed
 *               information on a specific project, facilitating project management
 *               and tracking.
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
class ProjectsInfo {
    getProjectCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                if (id) {
                    const findSingleProject = yield projectsCollection_1.default.findById(id);
                    if (!findSingleProject) {
                        return res.status(404).json({
                            issue: "Not Found!",
                            details: "Requested resources are not found.",
                        });
                    }
                    else {
                        return res.status(200).json(findSingleProject);
                    }
                }
                else {
                    const findAllProject = yield projectsCollection_1.default.find();
                    if (!findAllProject) {
                        return res.status(404).json({
                            issue: "Not Found!",
                            details: "Requested resources are not found.",
                        });
                    }
                    else {
                        return res.status(200).json(findAllProject);
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
exports.default = new ProjectsInfo();
