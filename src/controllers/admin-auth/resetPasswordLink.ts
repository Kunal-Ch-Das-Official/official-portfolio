import { Request, Response } from "express";
import authAdminUserModel from "../../models/authAdminCollection";
import jwt from "jsonwebtoken";
import envConfig from "../../config/envConfig";
import ResetPasswordLink from "../../utils/response-emails/reset-password/resetPasswordLink";
class ResetForgottenPassword {
  public async sendLink(req: Request, res: Response): Promise<void> {
    const { adminUserEmail } = req.body;
    const mailSender = new ResetPasswordLink();
    try {
      const findRequestedUser = await authAdminUserModel.findOne({
        adminUserEmail,
      });
      if (!findRequestedUser) {
        return <any>res.status(500).json({
          issue: "Not found!",
          details: "Requested user with this email id dose not exist.",
        });
      } else {
        const secret = findRequestedUser._id + envConfig.jwtSecretKey;
        const token = jwt.sign({ adminId: findRequestedUser._id }, secret, {
          expiresIn: "5m",
        });
        const link = `${envConfig.clientSideUrl}/reset-password/${findRequestedUser._id}/${token}`;

        await mailSender.sendMail(
          findRequestedUser.adminUserEmail,
          findRequestedUser.adminUserName,
          link,
          res
        );
      }
    } catch (error: any) {
      return <any>res.status(500).json({
        issue: "Internal Server error!",
        details: error.message,
      });
    }
  }
}

export default new ResetForgottenPassword();
