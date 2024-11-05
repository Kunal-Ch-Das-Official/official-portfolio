import nodemailer from "nodemailer";
import envConfig from "../../../config/envConfig";

class ResetPasswordLink {
  public async sendMail(
    sendTo: string,
    userName: string,
    corespondingLink: string,
    response: any
  ): Promise<void> {
    try {
      const transporter = nodemailer.createTransport({
        host: envConfig.emailHostProtocol,
        port: envConfig.emailPort,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: envConfig.emailHostUser,
          pass: envConfig.emailHostPassword,
        },
      });

      const mailOptions = {
        from: envConfig.emailHostUser, // Sender address
        to: sendTo, // List of receivers
        subject: "Kunal Chandra Das - Admin User Password Reset Request",
        html: `<body>
        
        <h1>Dear, ${userName}</h1>
        <a href=${corespondingLink}>Here is your reset button</a>
        
        </body>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return response.status(500).json({
            issue: error.message,
            details:
              "Unable to send this mail due to technical problem, please try again later",
          });
        } else {
          return response.status(200).json({
            message: "Email has been send successfully",
            resetLink: corespondingLink,
            notification: `Password reset link has been sended to this:${sendTo} email account.${info}`,
          });
        }
      });
    } catch (error: any) {
      return response.status(500).json({
        issue: error.message,
        details: "Unable to perform this task due to some technical problem.",
        message:
          "Please try again later, or if the issue not resolve autometically then contact with your tech support team.",
      });
    }
  }
}
export default ResetPasswordLink;
