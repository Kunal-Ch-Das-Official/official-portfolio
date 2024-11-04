import { Request, Response } from "express";
import contactModel from "../../models/contactInfoCollection";

class RequestedApplication {
  public async deleteCtrl(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const findExistingApplication = await contactModel.findById(id);
      if (!findExistingApplication) {
        return <any>res.status(404).json({
          issue: "Not Found!",
          details: "Requested application not exist.",
        });
      } else {
        const findAndDelete = await contactModel.findByIdAndDelete(id);
        if (!findAndDelete) {
          return <any>res.status(501).json({
            issue: "Not Implemented!",
            details: "Unable to delete, please try again later.",
          });
        } else {
          return <any>res.status(200).json({
            message: "Successfully removed!",
            details: "Message has been successfully removed.",
          });
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

export default new RequestedApplication();
