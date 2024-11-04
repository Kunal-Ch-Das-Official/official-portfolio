import { Request, Response } from "express";
import contactModel from "../../models/contactInfoCollection";
import ContactResponse from "../../utils/response-emails/contact-response/contactResponse";

class SendContactRes {
  public async sendEmail(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { subject, emailBody } = req.body;
    const emailSender = new ContactResponse();
    try {
      const getContactApplication = await contactModel.findById(id);
      if (!getContactApplication) {
        return <any>res.status(404).json({
          issue: "Not found!",
          details: "Requested resources are not found.",
        });
      } else {
        const { contactEmail, userName } = getContactApplication;
        await emailSender.sendemail(
          contactEmail,
          userName,
          subject,
          emailBody,
          res
        );
      }
    } catch (error: any) {
      return <any>res.status(500).json({
        issue: error.message,
        details: "Unable to send this email due to some technical problem.",
      });
    }
  }
}
export default new SendContactRes();
