"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Authentication Router
 * Author      : Kunal Chandra Das
 * Date        : 28.10.2024
 * Version     : 2.0.0
 * Details     : This file contains the routes for handling admin authentication
 *               in the system. The router defines the HTTP endpoints for admin
 *               login, authentication, and token management.
 *
 *               1. **POST /admin/login**: Authenticates an admin user by
 *                  validating the provided email and password, and returns
 *                  a JWT token if the credentials are correct.
 *
 *               2. **POST /admin/reset-password-link**: Sends a password
 *                  reset link to the admin's email address, allowing them
 *                  to reset their password securely.
 *
 *               The router ensures secure admin access by using appropriate
 *               authentication middleware and returning relevant error messages
 *               for invalid credentials or unauthorized access.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authValidator_1 = __importDefault(require("../../middlewares/auth-validator/authValidator"));
const loggedInUser_1 = __importDefault(require("../../controllers/admin-auth/loggedInUser"));
const changePassword_1 = __importDefault(require("../../controllers/admin-auth/changePassword"));
const registerNewAdmin_1 = __importDefault(require("../../controllers/admin-auth/registerNewAdmin"));
const adminLogin_1 = __importDefault(require("../../controllers/admin-auth/adminLogin"));
const resetPasswordLink_1 = __importDefault(require("../../controllers/admin-auth/resetPasswordLink"));
const resetForgottenPassword_1 = __importDefault(require("../../controllers/admin-auth/resetForgottenPassword"));
const admiAuthenticationRouter = (0, express_1.Router)();
// Register As An Admin
admiAuthenticationRouter.post("/register", registerNewAdmin_1.default.register);
// Login As An Admin
admiAuthenticationRouter.post("/login", adminLogin_1.default.login);
// Get Current Admin User
admiAuthenticationRouter.get("/current-user", authValidator_1.default.validate, loggedInUser_1.default.currentUser);
// Change Password
admiAuthenticationRouter.put("/change-password", authValidator_1.default.validate, changePassword_1.default.password);
// Reset password link send
admiAuthenticationRouter.post("/reset-password-link", resetPasswordLink_1.default.sendLink);
// Reset password
admiAuthenticationRouter.put("/reset-password/:id/:token", resetForgottenPassword_1.default.resetPassword);
exports.default = admiAuthenticationRouter;
