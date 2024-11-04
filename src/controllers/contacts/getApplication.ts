import { Request, Response } from "express";
import contactModel from "../../models/contactInfoCollection";

class ContactInfo {
  public async getCtrl(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      if (id) {
        const findSingleApplication = await contactModel.findById(id);
        if (!findSingleApplication) {
          return <any>res.status(404).json({
            issue: "Not Found!",
            details: "Requested application not exist.",
          });
        } else {
          return <any>res.status(200).json(findSingleApplication);
        }
      } else {
        const findAllApplications = await contactModel.find();
        if (!findAllApplications) {
          return <any>res.status(404).json({
            issue: "Not Found!",
            details: "Requested application not exist.",
          });
        } else {
          return <any>res.status(200).json(findAllApplications);
        }
      }
    } catch (error: any) {
      return <any>res.status(500).json({
        issue: "Internal Server Error!",
        details: error.message,
      });
    }
  }
}

export default new ContactInfo();
