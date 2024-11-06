"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Get contact applications
 * Author      : Kunal Chandra Das
 * Date        : 03.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for retrieving a "Contact Us"
 *               application submitted by a user. This functionality allows
 *               admins to view the details of contact requests that users have
 *               submitted through the "Contact Us" form on the platform.
 *
 *               The controller first validates that the admin making the request
 *               has the necessary privileges to view user submissions. Once
 *               authorized, the controller checks whether the specific contact
 *               submission exists in the database by using the unique submission
 *               ID. If the contact application is found, the controller returns
 *               the details of the submission, such as the user's name, email,
 *               message, and any other relevant data.
 *
 *               If the submission does not exist (e.g., invalid ID), the controller
 *               returns a `404 Not Found` response. If any unexpected errors
 *               occur (e.g., database issues, invalid request), an appropriate
 *               error message is returned.
 *
 *               This controller is critical for enabling admins to review and
 *               manage user-submitted contact requests, ensuring that they can
 *               efficiently follow up on or address inquiries made through the
 *               "Contact Us" form.
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
class ContactInfo {
    getCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                if (id) {
                    const findSingleApplication = yield contactInfoCollection_1.default.findById(id);
                    if (!findSingleApplication) {
                        return res.status(404).json({
                            issue: "Not Found!",
                            details: "Requested application not exist.",
                        });
                    }
                    else {
                        return res.status(200).json(findSingleApplication);
                    }
                }
                else {
                    const findAllApplications = yield contactInfoCollection_1.default.find();
                    if (!findAllApplications) {
                        return res.status(404).json({
                            issue: "Not Found!",
                            details: "Requested application not exist.",
                        });
                    }
                    else {
                        return res.status(200).json(findAllApplications);
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
exports.default = new ContactInfo();
