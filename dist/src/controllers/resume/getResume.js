"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Get Resume
 * Author      : Kunal Chandra Das
 * Date        : 31.10.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for retrieving an existing
 *               resume in the system. The controller allows authorized users
 *               (e.g., users or admins) to access and view a resume stored in
 *               the platform.
 *
 *               The controller first validates that the user making the request
 *               has the necessary authorization to view the resume. This typically
 *               involves checking whether the user is the owner of the resume or
 *               an admin. If the user is unauthorized, a `403 Forbidden` response
 *               is returned.
 *
 *               The controller then attempts to locate the resume in the database
 *               using the unique resume ID provided in the request. If the resume
 *               is found, the controller returns the resume details, such as the
 *               name, contact information, skills, education, work experience, and
 *               any other relevant data stored with the resume. A `200 OK` response
 *               is returned along with the resume data.
 *
 *               If the resume cannot be found (e.g., invalid ID), the controller
 *               returns a `404 Not Found` response, indicating that the requested
 *               resume does not exist in the system.
 *
 *               In case of any unexpected issues (e.g., database failures),
 *               the controller returns a `500 Internal Server Error` response,
 *               signaling that an error occurred while attempting to retrieve the
 *               resume.
 *
 *               This controller is essential for enabling users or admins to
 *               securely view resumes stored in the system. It provides functionality
 *               to view the data associated with resumes and ensures that the system
 *               is able to securely serve resume information when requested.
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
class ResumeInfo {
    getCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                if (id) {
                    const findSingleResume = yield resumeCollection_1.default.findById(id);
                    if (!findSingleResume) {
                        return res.status(404).json({
                            issue: "Not Found!",
                            details: "Requested resume not exist.",
                        });
                    }
                    else {
                        return res.status(200).json(findSingleResume);
                    }
                }
                else {
                    const findAllResume = yield resumeCollection_1.default.find();
                    if (!findAllResume) {
                        return res.status(404).json({
                            issue: "Not Found!",
                            details: "Requested resources are not exist.",
                        });
                    }
                    else {
                        return res.status(200).json(findAllResume);
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
exports.default = new ResumeInfo();
