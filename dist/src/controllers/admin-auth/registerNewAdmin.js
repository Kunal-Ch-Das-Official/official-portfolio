"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Register new admin
 * Author      : Kunal Chandra Das
 * Date        : 01.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for handling the registration
 *               of a new admin user. It allows the creation of an admin account
 *               by accepting the admin's details (such as name, email, and password)
 *               from the client.
 *
 *               The controller first validates the input data to ensure all required
 *               fields (e.g., name, email, and password) are provided. It checks if the
 *               provided email or username is already in use in the system, and if it is,
 *               it returns a `409 Conflict` response. If the email or username is unique, the
 *               password is hashed using **bcrypt** before storing it securely in the database.
 *
 *               After successfully registering the admin, the controller returns
 *               a success response with a message confirming the new admin account
 *               creation. If there are any validation errors or unexpected issues
 *               (e.g., database failure), the controller will respond with an
 *               appropriate error message.
 *
 *               This controller helps system administrators securely create
 *               new admin accounts and manage access control to the system.
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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envConfig_1 = __importDefault(require("../../config/envConfig"));
const authAdminCollection_1 = __importDefault(require("../../models/authAdminCollection"));
class NewAdmin {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { adminUserName, adminUserEmail, adminUserPassword, confirmPassword, } = req.body;
            try {
                // Check is users email already exist or not
                const requestedUserId = yield authAdminCollection_1.default.findOne({
                    adminUserName,
                });
                // If user exist the run this block of code
                if (requestedUserId) {
                    res.status(409).json({
                        issue: "Confilct!",
                        details: "Requested user with this email id already exists.",
                    });
                    // If not exist run this block of code
                }
                else {
                    if (adminUserName &&
                        adminUserEmail &&
                        adminUserPassword &&
                        confirmPassword) {
                        if (adminUserPassword === confirmPassword) {
                            // Encrypt given adminUserPassword
                            const salt = yield bcrypt_1.default.genSalt(15);
                            const hashPassword = yield bcrypt_1.default.hash(adminUserPassword, salt);
                            const newAdminUser = new authAdminCollection_1.default({
                                adminUserName: adminUserName,
                                adminUserEmail: adminUserEmail,
                                adminUserPassword: hashPassword,
                            });
                            const userApplication = yield newAdminUser.save();
                            if (!userApplication) {
                                return res.status(501).json({
                                    issue: "Not implemented!",
                                    details: "Something went wrong, please try again later.",
                                });
                            }
                            else {
                                const recentUser = yield authAdminCollection_1.default.findOne({
                                    adminUserName,
                                });
                                if (recentUser) {
                                    const token = jsonwebtoken_1.default.sign({ adminId: recentUser._id }, envConfig_1.default.jwtSecretKey, {
                                        expiresIn: "1d",
                                    });
                                    if (token) {
                                        return res.status(201).json({
                                            message: "Registration successful!",
                                            details: "Congratulations!",
                                            valid_admin_token: token,
                                        });
                                    }
                                    else {
                                        return res.status(501).json({
                                            issue: "Not implemented!",
                                            details: "Something went wrong please try again later.",
                                        });
                                    }
                                }
                                else {
                                    return res.status(404).json({
                                        issue: "Not found!",
                                        details: "Requested user id not found.",
                                    });
                                }
                            }
                        }
                        else {
                            return res.status(400).json({
                                issue: "Bad Request!",
                                details: "Password and confirm adminUserPassword are not same.",
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
exports.default = new NewAdmin();
