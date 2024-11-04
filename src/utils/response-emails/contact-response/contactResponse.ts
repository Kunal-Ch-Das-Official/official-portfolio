import nodemailer from "nodemailer";
import envConfig from "../../../config/envConfig";

class ContactResponse {
  public async sendemail(
    sendTo: string,
    userName: string,
    subject: string,
    mailBody: string,
    response: any
  ): Promise<void> {
    const transporter = nodemailer.createTransport({
      host: envConfig.emailHostProtocol,
      port: envConfig.emailPort,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: envConfig.emailHostUser,
        pass: envConfig.emailHostPassword,
      },
    });
    const date = new Date();
    const todaysDate = date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const mailOptions = {
      from: envConfig.emailHostUser, // Sender address
      to: sendTo, // List of receivers
      subject,
      html: `<body>
          <h1>Dear, ${userName}</h1>
        <p>${mailBody}</p>
        <p>${todaysDate}</p>
        </body>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return <any>response.status(500).json({
          issue: error.message,
          details:
            "Unable to send this mail, due to some technical problem. Please try again later.",
          alert:
            "If the issue not resolve autometically then contact to your tech support team.",
        });
      } else {
        return <any>response.status(200).json({
          message: "Email has been send successfully!",
          sending_id: info.messageId,
          notification: `The mail has been successfully send to this:${sendTo} adress.`,
        });
      }
    });
  }
}

export default ContactResponse;
