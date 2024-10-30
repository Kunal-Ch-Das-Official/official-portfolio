import { Request, Response } from "express";
import bcrypt from "bcrypt";
import authAdminUserModel from "../../models/authAdminCollection";
class Change {
  public async password(req: Request, res: Response): Promise<void> {
    const { adminUserPassword, confirmPassword } = req.body;
    try {
      if (adminUserPassword && confirmPassword) {
        if (adminUserPassword !== confirmPassword) {
          return <any>res.status(400).json({
            issue: "Bad Request!",
            details: "Password and confirm password are not same.",
          });
        } else {
          const salt = await bcrypt.genSalt(15);
          const hashedPassword = await bcrypt.hash(adminUserPassword, salt);
          const asignNewPassword = await authAdminUserModel.findByIdAndUpdate(
            req.currentUser._id,
            {
              $set: { adminUserPassword: hashedPassword },
            }
          );
          if (asignNewPassword) {
            return <any>res.status(200).json({
              details: "Password has been successfully updated.",
            });
          } else {
            return <any>res.status(501).json({
              issue: "Not Implemented!",
              details: "Something went wrong, please try again later.",
            });
          }
        }
      } else {
        return <any>res.status(400).json({
          issue: "Bad Request!",
          details: "All fields are required.",
        });
      }
    } catch (error) {
      return <any>res.status(500).json({
        issue: "Internal Server Error!",
        details: "Something went wrong, please try again later.",
      });
    }
  }
}
export default new Change();
