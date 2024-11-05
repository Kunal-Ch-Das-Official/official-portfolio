import { Request, Response } from "express";
import authAdminUserModel from "../../models/authAdminCollection";
import envConfig from "../../config/envConfig";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
class ForgottenPassword {
  public async resetPassword(req: Request, res: Response): Promise<void> {
    const { adminUserPassword, confirmPassword } = req.body;
    const { id, token } = req.params;
    try {
      if (adminUserPassword && confirmPassword) {
        if (adminUserPassword === confirmPassword) {
          const findexistingUser = await authAdminUserModel.findById(id);
          if (!findexistingUser) {
            return <any>res.status(404).json({
              issue: "Not found!",
              details: "Requested user dose not exist in our records.",
            });
          } else {
            const newSecret = findexistingUser._id + envConfig.jwtSecretKey;
            jwt.verify(token, newSecret);
            const salt = await bcrypt.genSalt(15);
            const hashPassword = await bcrypt.hash(adminUserPassword, salt);
            const findExistingOneAndUpdate =
              await authAdminUserModel.findByIdAndUpdate(findexistingUser._id, {
                $set: { adminUserPassword: hashPassword },
              });
            if (!findExistingOneAndUpdate) {
              return <any>res.status(501).json({
                issue: "Not Implemented!",
                details: "Something went wrong, please try again later.",
              });
            } else {
              return <any>res.status(200).json({
                issue: "Successfully Reset!",
                details: "Your password has been updated.",
              });
            }
          }
        } else {
          return <any>res.status(403).json({
            issue: "Forbidden!.",
            details: "Password and confirm password not match",
          });
        }
      } else {
        return <any>res.status(400).json({
          issue: "Bad Request!",
          details: "All fields are required.",
        });
      }
    } catch (error: any) {
      return <any>res.status(500).json({
        issue: "Internal Server Error!",
        details: error.message,
      });
    }
  }
}
export default new ForgottenPassword();
