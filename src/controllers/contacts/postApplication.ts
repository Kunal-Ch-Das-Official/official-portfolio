import { Request, Response } from "express";
import contactModel from "../../models/contactInfoCollection";

class ContactApplication {
  public async postCtrl(req: Request, res: Response): Promise<void> {
    const { userName, contactEmail, contactNumber, message } = req.body;

    try {
      if (!userName && !contactEmail && !contactNumber) {
        return <any>res.status(402).json({
          issue: "Bad Request!",
          details: "Required fields are missing.",
        });
      } else {
        const postData = new contactModel({
          userName,
          contactEmail,
          contactNumber,
          message,
        });
        const saveInfo = await postData.save();
        if (!saveInfo) {
          return <any>res.status(501).json({
            issue: "Not Implemented!",
            details: "Unable to post, please try again later.",
          });
        } else {
          return <any>res.status(201).json({
            message: "Successfully uploded!",
            details: "Your message has been successfully uploaded.",
          });
        }
      }
    } catch (error: any) {
      return <any>res.status(500).json({
        issue: "Internal server error!",
        details: error.message,
      });
    }
  }
}
export default new ContactApplication();
