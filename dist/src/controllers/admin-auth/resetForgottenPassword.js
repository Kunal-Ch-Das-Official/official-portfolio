"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Reset forgotten password
 * Author      : Kunal Chandra Das
 * Date        : 01.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for handling the password reset
 *               process for admin users. It allows admins to reset their password
 *               by providing a valid ID and reset token.
 *
 *               The controller first checks if the admin user exists in the system by their ID.
 *               If the user exists, it verifies the provided reset token included in the request.
 *               The token is time-limited and used to ensure secure password resetting.
 *
 *               Once the token is verified, the new password is securely hashed using **bcrypt**
 *               before being stored in the database.
 *
 *               If the provided reset token is invalid or expired, or if there are issues with
 *               updating the password, appropriate error messages are returned.
 *
 *               This controller helps admins recover access to their accounts
 *               securely by providing a mechanism for resetting their forgotten
 *               or compromised passwords.
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
const authAdminCollection_1 = __importDefault(require("../../models/authAdminCollection"));
const envConfig_1 = __importDefault(require("../../config/envConfig"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class ForgottenPassword {
    resetPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { adminUserPassword, confirmPassword } = req.body;
            const { id, token } = req.params;
            try {
                if (adminUserPassword && confirmPassword) {
                    if (adminUserPassword === confirmPassword) {
                        const findexistingUser = yield authAdminCollection_1.default.findById(id);
                        if (!findexistingUser) {
                            return res.status(404).json({
                                issue: "Not found!",
                                details: "Requested user dose not exist in our records.",
                            });
                        }
                        else {
                            const newSecret = findexistingUser._id + envConfig_1.default.jwtSecretKey;
                            jsonwebtoken_1.default.verify(token, newSecret);
                            const salt = yield bcrypt_1.default.genSalt(15);
                            const hashPassword = yield bcrypt_1.default.hash(adminUserPassword, salt);
                            const findExistingOneAndUpdate = yield authAdminCollection_1.default.findByIdAndUpdate(findexistingUser._id, {
                                $set: { adminUserPassword: hashPassword },
                            });
                            if (!findExistingOneAndUpdate) {
                                return res.status(501).json({
                                    issue: "Not Implemented!",
                                    details: "Something went wrong, please try again later.",
                                });
                            }
                            else {
                                return res.status(200).json({
                                    issue: "Successfully Reset!",
                                    details: "Your password has been updated.",
                                });
                            }
                        }
                    }
                    else {
                        return res.status(403).json({
                            issue: "Forbidden!.",
                            details: "Password and confirm password not match",
                        });
                    }
                }
                else {
                    return res.status(400).json({
                        issue: "Bad Request!",
                        details: "All fields are required.",
                    });
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
exports.default = new ForgottenPassword();
