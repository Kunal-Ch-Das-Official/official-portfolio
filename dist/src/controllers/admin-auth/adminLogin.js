"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Admin login controller
 * Author      : Kunal Chandra Das
 * Date        : 01.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for handling admin user
 *               authentication, specifically the login process.
 *               It verifies the admin's credentials (email and password),
 *               generates a JWT token upon successful login, and handles
 *               various error scenarios with appropriate HTTP responses.
 *               The JWT token (with a 1-day expiration) is used to authenticate
 *               the admin for subsequent requests to protected resources such as
 *               the admin dashboard.
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
const authAdminCollection_1 = __importDefault(require("../../models/authAdminCollection"));
const envConfig_1 = __importDefault(require("../../config/envConfig"));
class AdminUser {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { adminUserEmail, adminUserPassword } = req.body;
            try {
                if (adminUserEmail && adminUserPassword) {
                    const isAdmin = yield authAdminCollection_1.default.findOne({
                        adminUserEmail,
                    });
                    if (!isAdmin) {
                        return res.status(401).json({
                            issue: " Unauthorized Admin!",
                            details: "You are not authorized admin.",
                        });
                    }
                    else {
                        const isPasswordMatch = yield bcrypt_1.default.compare(adminUserPassword, isAdmin.adminUserPassword);
                        if (isPasswordMatch === true && adminUserEmail === adminUserEmail) {
                            const requestedUser = yield authAdminCollection_1.default.findOne({
                                adminUserEmail,
                            });
                            if (requestedUser) {
                                const token = jsonwebtoken_1.default.sign({ adminId: requestedUser._id }, envConfig_1.default.jwtSecretKey, { expiresIn: "1d" });
                                if (token) {
                                    return res.status(200).json({
                                        message: "Login successful!",
                                        details: "Welcome to admin dashboard.",
                                        authentication_sign: token,
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
                                    details: "User not exist.",
                                });
                            }
                        }
                        else {
                            return res.status(401).json({
                                issue: "Authentication failed!",
                                details: "Email or password dosen't match",
                            });
                        }
                    }
                }
                else {
                    return res.status(400).json({
                        issue: "Bad Request!",
                        details: "Email and password required.",
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
exports.default = new AdminUser();
