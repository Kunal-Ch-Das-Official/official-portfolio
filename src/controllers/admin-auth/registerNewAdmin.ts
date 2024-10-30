import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import envConfig from "../../config/envConfig";
import authAdminUserModel from "../../models/authAdminCollection";

class RegisterNewAdmin {
  public async register(req: Request, res: Response): Promise<void> {
    const {
      adminUserName,
      adminUserEmail,
      adminUserPassword,
      confirmPassword,
    } = req.body;

    try {
      // Check is users email already exist or not
      const requestedUserId = await authAdminUserModel.findOne({
        adminUserName,
      });
      // If user exist the run this block of code
      if (requestedUserId) {
        res.status(409).json({
          issue: "Confilct!",
          details: "Requested user with this email id already exists.",
        });
        // If not exist run this block of code
      } else {
        if (
          adminUserName &&
          adminUserEmail &&
          adminUserPassword &&
          confirmPassword
        ) {
          if (adminUserPassword === confirmPassword) {
            // Encrypt given adminUserPassword
            const salt = await bcrypt.genSalt(15);
            const hashPassword = await bcrypt.hash(adminUserPassword, salt);
            const newAdminUser = new authAdminUserModel({
              adminUserName: adminUserName,
              adminUserEmail: adminUserEmail,
              adminUserPassword: hashPassword,
            });
            const userApplication = await newAdminUser.save();
            if (!userApplication) {
              return <any>res.status(501).json({
                issue: "Not implemented!",
                details: "Something went wrong, please try again later.",
              });
            } else {
              const recentUser = await authAdminUserModel.findOne({
                adminUserName,
              });
              if (recentUser) {
                const token = jwt.sign(
                  { adminId: recentUser._id },
                  envConfig.jwtSecretKey,
                  {
                    expiresIn: "1d",
                  }
                );
                if (token) {
                  return <any>res.status(201).json({
                    message: "Registration successful!",
                    details: "Congratulations!",
                    valid_admin_token: token,
                  });
                } else {
                  return <any>res.status(501).json({
                    issue: "Not implemented!",
                    details: "Something went wrong please try again later.",
                  });
                }
              } else {
                return <any>res.status(404).json({
                  issue: "Not found!",
                  details: "Requested user id not found.",
                });
              }
            }
          } else {
            return <any>res.status(400).json({
              issue: "Bad Request!",
              details: "Password and confirm adminUserPassword are not same.",
            });
          }
        } else {
          return <any>res.status(400).json({
            issue: "Bad Request!",
            details: "All fields are required.",
          });
        }
      }
    } catch (error) {
      return <any>res.status(500).json({
        issue: "Internal Server Error!",
        details: "Something went wrong, please try again later.",
      });
    }
  }
}

export default new RegisterNewAdmin();
