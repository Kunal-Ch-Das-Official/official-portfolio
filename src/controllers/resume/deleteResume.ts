import { Request, Response } from "express";
import resumeModel from "../../models/resumeCollection";
import Destroyer from "../../utils/cloud-destroyed/cloudDestroyer";

class RequestedResume {
  public async deleteCtrl(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const destroyer = new Destroyer();
      const existingResume = await resumeModel.findById(id);

      if (!existingResume) {
        return <any>res.status(404).json({
          issue: "Not Found!",
          details: "Requested resume not exist.",
        });
      } else {
        const { resumePublicId } = existingResume;
        await destroyer.cloudAssets(resumePublicId);
        const deleteFromDb = await resumeModel.findByIdAndDelete(id);
        if (!deleteFromDb) {
          return <any>res.status(501).json({
            issue: "Not Implemented!",
            details: "Unable to delete resume, please try again later.",
          });
        } else {
          return <any>res.status(201).json({
            message: "Successfully Removed",
            details: "Resume has been successfully removed from our records.",
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
export default new RequestedResume();
