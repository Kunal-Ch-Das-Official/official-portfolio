import { Request, Response } from "express";
import authAdminUserModel from "../../models/authAdminCollection";
class AllUser {
  public async registered(req: Request, res: Response): Promise<void> {
    try {
      const getAllAdminUser = await authAdminUserModel.find();
      if (getAllAdminUser) {
        return <any>res.status(200).json(getAllAdminUser);
      } else {
        return <any>res.status(404).json({
          issue: "Not Found!",
          details: "Admin users not exist",
        });
      }
    } catch (error: any) {
      return <any>res.status(500).json({
        issue: "Internal Server Error!",
        details: error.message,
      });
    }
  }
}

export default new AllUser();
