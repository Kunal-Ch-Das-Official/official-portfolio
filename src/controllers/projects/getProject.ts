import { Request, Response } from "express";
import projectModel from "../../models/projectsCollection";

class ProjectsInfo {
  public async getProjectCtrl(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
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
          issue: "Not Available!",
          details: "Projects are not available this time.",
        });
      } else {
        return <any>res.status(200).json(findAllProject);
      }
    }
  }
}

export default new ProjectsInfo();
