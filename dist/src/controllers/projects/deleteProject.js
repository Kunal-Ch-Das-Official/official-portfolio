"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Delete existing projects
 * Author      : Kunal Chandra Das
 * Date        : 05.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for handling the deletion
 *               of an existing project in the system. The controller allows
 *               authorized users (e.g., admins or project owners) to delete
 *               a project from the platform.
 *
 *               The controller first checks if the user making the request
 *               has the necessary authorization to delete the project. This
 *               typically involves verifying that the user is either an admin
 *               or the owner of the project. If the user is not authorized,
 *               a `403 Forbidden` response is returned.
 *
 *               The controller then attempts to find the project in the
 *               database using the unique project ID provided in the request.
 *               If the project is not found, a `404 Not Found` response is
 *               returned.
 *
 *               If the project exists and the user is authorized to delete it,
 *               the controller proceeds to delete the project from the system,
 *               removing all associated data (e.g., files, dependencies,
 *               records). Once the deletion is successful, a `200 OK` response
 *               is returned, indicating that the project has been successfully
 *               deleted.
 *
 *               In case of any errors during the deletion process (e.g.,
 *               database issues), the controller returns an appropriate error
 *               message. If the project deletion fails for any reason, a `500
 *               Internal Server Error` response is returned.
 *
 *               This controller is essential for managing project lifecycles,
 *               allowing users to safely remove outdated, irrelevant, or
 *               unnecessary projects from the system.
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
const cloudinaryConfig_1 = __importDefault(require("../../config/cloudinaryConfig"));
class RequestedProject {
    deleteCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const getRequestedInfo = yield projectsCollection_1.default.findById(id);
                if (!getRequestedInfo) {
                    return res.status(404).json({
                        issue: "Not found!",
                        details: "Requested resources are not found.",
                    });
                }
                else {
                    const { projectLogoPublicId, firstPageImagePublicId, secondPageImagePublicId, thirdPageImagePublicId, } = getRequestedInfo;
                    const allPublicId = [
                        projectLogoPublicId,
                        firstPageImagePublicId,
                        secondPageImagePublicId,
                        thirdPageImagePublicId,
                    ];
                    const deleteAllAssets = yield cloudinaryConfig_1.default.api.delete_resources(allPublicId, {
                        type: "upload",
                        resource_type: "image",
                    });
                    if (deleteAllAssets) {
                        const deleted = yield projectsCollection_1.default.findByIdAndDelete(id);
                        if (deleted) {
                            return res.status(200).json({
                                message: "Removed successfully!",
                                details: "Requested resources has been successfully removed.",
                            });
                        }
                        else {
                            return res.status(501).json({
                                issue: "Not Implemented!",
                                details: "Something went wrong, please try again later.",
                            });
                        }
                    }
                    else {
                        return res.status(501).json({
                            issue: "Cloudinary error!",
                            details: "Something went wrong, please try again later.",
                        });
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
exports.default = new RequestedProject();
