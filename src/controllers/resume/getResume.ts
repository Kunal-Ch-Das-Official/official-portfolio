import { Request, Response } from "express";
import resumeModel from "../../models/resumeCollection";

class ResumeInfo {
  public async getCtrl(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      if (id) {
        const findSingleResume = await resumeModel.findById(id);
        if (!findSingleResume) {
          return <any>res.status(404).json({
            issue: "Not Found!",
            details: "Requested resume not exist.",
          });
        } else {
          return <any>res.status(200).json(findSingleResume);
        }
      } else {
        const findAllResume = await resumeModel.find();
        if (!findAllResume) {
          return <any>res.status(404).json({
            issue: "Not Found!",
            details: "Requested resources are not exist.",
          });
        } else {
          return <any>res.status(200).json(findAllResume);
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
export default new ResumeInfo();
