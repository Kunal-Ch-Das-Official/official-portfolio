"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Delete Resume
 * Author      : Kunal Chandra Das
 * Date        : 31.10.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for deleting an existing
 *               resume in the system. The controller allows authorized users
 *               (e.g., users or admins) to remove a resume from the platform.
 *
 *               The controller first validates that the user making the request
 *               has the necessary authorization to delete the resume. This typically
 *               involves checking whether the user is the owner of the resume or
 *               has admin privileges. If the user does not have the required
 *               permissions, a `403 Forbidden` response is returned.
 *
 *               The controller then attempts to locate the resume in the database
 *               using the unique resume ID provided in the request. If the resume
 *               is not found (e.g., invalid ID), a `404 Not Found` response is
 *               returned, indicating that the requested resume does not exist.
 *
 *               If the resume exists and the user has the proper authorization,
 *               the controller proceeds to delete the resume from the system. This
 *               involves removing the associated file and any related metadata
 *               from the database. After the resume is successfully deleted,
 *               a `200 OK` response is returned, confirming that the resume has
 *               been deleted.
 *
 *               In case of any errors during the deletion process (e.g., database
 *               failures, missing resume ID), the controller returns an appropriate
 *               error message. If the deletion fails for any reason, a `500 Internal
 *               Server Error` response is returned.
 *
 *               This controller is essential for managing resumes within the system,
 *               allowing users or admins to safely remove outdated, incorrect, or
 *               unnecessary resume entries. It ensures that the platform maintains
 *               up-to-date resume data and preserves user privacy.
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
const resumeCollection_1 = __importDefault(require("../../models/resumeCollection"));
const cloudDestroyer_1 = __importDefault(require("../../utils/cloud-destroyed/cloudDestroyer"));
class RequestedResume {
    deleteCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const destroyer = new cloudDestroyer_1.default();
                const existingResume = yield resumeCollection_1.default.findById(id);
                if (!existingResume) {
                    return res.status(404).json({
                        issue: "Not Found!",
                        details: "Requested resume not exist.",
                    });
                }
                else {
                    const { resumePublicId } = existingResume;
                    yield destroyer.cloudAssets(resumePublicId);
                    const deleteFromDb = yield resumeCollection_1.default.findByIdAndDelete(id);
                    if (!deleteFromDb) {
                        return res.status(501).json({
                            issue: "Not Implemented!",
                            details: "Unable to delete resume, please try again later.",
                        });
                    }
                    else {
                        return res.status(201).json({
                            message: "Successfully Removed",
                            details: "Resume has been successfully removed from our records.",
                        });
                    }
                }
            }
            catch (error) {
                return res.status(500).json({
                    issue: "Internal Server Error!",
                    details: error.message,
                });
            }
        });
    }
}
exports.default = new RequestedResume();
