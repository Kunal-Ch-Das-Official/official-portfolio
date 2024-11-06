"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Delete contact application
 * Author      : Kunal Chandra Das
 * Date        : 03.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for handling the deletion
 *               of a "Contact Us" application submitted by a user, which is
 *               later deleted by an admin. This functionality allows admins
 *               to manage the contact requests submitted by users, ensuring
 *               that inappropriate or irrelevant submissions can be removed
 *               from the system.
 *
 *               The controller first validates whether the request is being made
 *               by an authorized admin user. If the user has the necessary
 *               privileges, the controller checks if the contact submission exists
 *               by using the unique identifier (e.g., submission ID). The contact
 *               request is then removed from the database.
 *
 *               If the contact application is not found (e.g., invalid submission ID),
 *               the controller returns a `404 Not Found` response. If the deletion
 *               is successful, the controller returns a success message confirming
 *               that the contact request has been deleted.
 *
 *               In cases of unauthorized access (i.e., non-admin users attempting
 *               to delete a contact request), or if any unexpected issues occur
 *               during the deletion process (e.g., database failure), the controller
 *               returns an appropriate error message.
 *
 *               This controller helps admins maintain control over user-submitted
 *               content by providing a secure and efficient method to delete contact
 *               applications that no longer require attention or are deemed inappropriate.
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
const contactInfoCollection_1 = __importDefault(require("../../models/contactInfoCollection"));
class RequestedApplication {
    deleteCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const findExistingApplication = yield contactInfoCollection_1.default.findById(id);
                if (!findExistingApplication) {
                    return res.status(404).json({
                        issue: "Not Found!",
                        details: "Requested application not exist.",
                    });
                }
                else {
                    const findAndDelete = yield contactInfoCollection_1.default.findByIdAndDelete(id);
                    if (!findAndDelete) {
                        return res.status(501).json({
                            issue: "Not Implemented!",
                            details: "Unable to delete, please try again later.",
                        });
                    }
                    else {
                        return res.status(200).json({
                            message: "Successfully removed!",
                            details: "Message has been successfully removed.",
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
exports.default = new RequestedApplication();
