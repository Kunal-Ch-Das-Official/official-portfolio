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
import resgisterNewAdmin from "../../controllers/admin-auth/registerNewAdmin";
import adminLogin from "../../controllers/admin-auth/adminLogin";
import authValidator from "../../middlewares/auth-validator/authValidator";
import loggedInUser from "../../controllers/admin-auth/loggedInUser";

const admiAuthenticationRouter = Router();

// Register As An Admin
admiAuthenticationRouter.post("/register", resgisterNewAdmin.register);

// Login As An Admin
admiAuthenticationRouter.post("/login", adminLogin.login);

// Get Current Admin User
admiAuthenticationRouter.get(
  "/current-user",
  authValidator.validator,
  loggedInUser.currentUser
);

export default admiAuthenticationRouter;
