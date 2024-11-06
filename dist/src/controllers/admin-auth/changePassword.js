"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Password change controller
 * Author      : Kunal Chandra Das
 * Date        : 01.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for handling the admin user's
 *               password change functionality. It allows authenticated admins
 *               to change their password by providing a new password and confirming it.
 *
 *               The controller checks if the new password and the confirm password match.
 *               It then securely hashes the new password using bcrypt, generating a salt
 *               with a strength of 15 rounds. After hashing the password, it updates the
 *               admin's password in the database.
 *
 *               If the update is successful, a success response is returned. If any errors
 *               occur (e.g., mismatched passwords, missing fields, or database issues),
 *               appropriate error messages are returned.
 *
 *               This functionality helps admins maintain secure access by allowing
 *               them to change their password whenever necessary.
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
const bcrypt_1 = __importDefault(require("bcrypt"));
const authAdminCollection_1 = __importDefault(require("../../models/authAdminCollection"));
class Change {
    password(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { adminUserPassword, confirmPassword } = req.body;
            try {
                if (adminUserPassword && confirmPassword) {
                    if (adminUserPassword !== confirmPassword) {
                        return res.status(400).json({
                            issue: "Bad Request!",
                            details: "Password and confirm password are not same.",
                        });
                    }
                    else {
                        const salt = yield bcrypt_1.default.genSalt(15);
                        const hashedPassword = yield bcrypt_1.default.hash(adminUserPassword, salt);
                        const asignNewPassword = yield authAdminCollection_1.default.findByIdAndUpdate(req.currentUser._id, {
                            $set: { adminUserPassword: hashedPassword },
                        });
                        if (asignNewPassword) {
                            return res.status(200).json({
                                details: "Password has been successfully updated.",
                            });
                        }
                        else {
                            return res.status(501).json({
                                issue: "Not Implemented!",
                                details: "Something went wrong, please try again later.",
                            });
                        }
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
exports.default = new Change();
