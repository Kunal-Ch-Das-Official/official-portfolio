"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Post contact applications
 * Author      : Kunal Chandra Das
 * Date        : 03.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for handling the submission
 *               of a "Contact Us" application by a user. It allows users to
 *               send inquiries or feedback to the admin through the platform’s
 *               "Contact Us" form.
 *
 *               The controller validates the data submitted by the user, ensuring
 *               that all required fields (e.g., name, email, message) are included
 *               and properly formatted. If any of the required fields are missing
 *               or contain invalid data, the controller will return a `400 Bad Request`
 *               response with an appropriate error message.
 *
 *               Once the input data is validated, the controller stores the contact
 *               submission in the database. It includes the user's name, email,
 *               and message, and any additional data or metadata that may be included
 *               in the contact form. After successfully storing the data, the controller
 *               returns a `201 Created` response with a success message, indicating
 *               that the contact application has been successfully submitted.
 *
 *               If there is an issue during submission (e.g., database failure,
 *               validation errors), the controller returns an appropriate error message.
 *
 *               This controller plays a crucial role in enabling users to reach
 *               out to the platform administrators with inquiries, feedback, or
 *               concerns. It ensures that the submission process is secure, valid,
 *               and efficient, while also providing feedback to the user about
 *               the status of their contact request.
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
class ContactApplication {
    postCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, contactEmail, contactNumber, message } = req.body;
            try {
                if (!userName && !contactEmail && !contactNumber) {
                    return res.status(402).json({
                        issue: "Bad Request!",
                        details: "Required fields are missing.",
                    });
                }
                else {
                    const postData = new contactInfoCollection_1.default({
                        userName,
                        contactEmail,
                        contactNumber,
                        message,
                    });
                    const saveInfo = yield postData.save();
                    if (!saveInfo) {
                        return res.status(501).json({
                            issue: "Not Implemented!",
                            details: "Unable to post, please try again later.",
                        });
                    }
                    else {
                        return res.status(201).json({
                            message: "Successfully uploded!",
                            details: "Your message has been successfully uploaded.",
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
exports.default = new ContactApplication();
