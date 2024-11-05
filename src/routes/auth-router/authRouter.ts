/**
 * Admin Registration Router
 * Project: CBS-Research-Group-Backend
 * Author: Kunal Chandra Das
 * Date: 20/08/2024
 *
 * Description:
 * This router handles the admin sign-up process for the CBS Research Group.
 * It defines the endpoints and middleware for registering new admin users,
 * including validation of registration data and integration with the
 * admin user database model.
 *
 * Usage:
 * Use this router to manage admin registration routes. It handles requests
 * related to admin sign-up, ensuring proper validation and creation of new
 * admin user records in the database.
 */

import { Router } from "express";
import AuthValidator from "../../middlewares/auth-validator/authValidator";
import LoggedIn from "../../controllers/admin-auth/loggedInUser";
import Change from "../../controllers/admin-auth/changePassword";
import NewAdmin from "../../controllers/admin-auth/registerNewAdmin";
import AdminUser from "../../controllers/admin-auth/adminLogin";
import ResetForgottenPassword from "../../controllers/admin-auth/resetPasswordLink";

const admiAuthenticationRouter = Router();

// Register As An Admin
admiAuthenticationRouter.post("/register", NewAdmin.register);

// Login As An Admin
admiAuthenticationRouter.post("/login", AdminUser.login);

// Get Current Admin User
admiAuthenticationRouter.get(
  "/current-user",
  AuthValidator.validate,
  LoggedIn.currentUser
);

// Change Password
admiAuthenticationRouter.post(
  "/change-password",
  AuthValidator.validate,
  Change.password
);

// Reset password link send
admiAuthenticationRouter.post(
  "/reset-password-link",
  ResetForgottenPassword.sendLink
);

export default admiAuthenticationRouter;
