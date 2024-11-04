import { Request, Response } from "express";
import projectModel from "../../models/projectsCollection";

class ProjectsInfo {
  public async getProjectCtrl(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      if (id) {
        const findSingleProject = await projectModel.findById(id);
        if (!findSingleProject) {
          return <any>res.status(404).json({
            issue: "Not Found!",
            details: "Requested resources are not found.",
          });
        } else {
          return <any>res.status(200).json(findSingleProject);
        }
      } else {
        const findAllProject = await projectModel.find();
        if (!findAllProject) {
          return <any>res.status(404).json({
            issue: "Not Found!",
            details: "Requested resources are not found.",
          });
        } else {
          return <any>res.status(200).json(findAllProject);
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

export default new ProjectsInfo();
