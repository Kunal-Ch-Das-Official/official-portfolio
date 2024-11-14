import { Request, Response } from "express";
import authAdminUserModel from "../../models/authAdminCollection";
class DeleteAdmin {
  public async account(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    if (id) {
      try {
        const findRequestedUser = await authAdminUserModel.findById(id);
        if (findRequestedUser) {
          const deleteUser = await authAdminUserModel.findByIdAndDelete(id);
          if (deleteUser) {
            return <any>res.status(200).json({
              message: "Successfully deactived!",
              details: "The account has been deactivated successfully.",
            });
          } else {
            return <any>res.status(501).json({
              issue: "Not implemented!",
              details: "please check the request details and try again.",
            });
          }
        } else {
          return <any>res.status(404).json({
            issue: "User not exist!",
            details: "please check the request details and try again.",
          });
        }
      } catch (error: any) {
        return <any>res.status(500).json({
          issue: "Internal Server Error!",
          details: error.message,
        });
      }
    } else {
      return <any>res.status(404).json({
        issue: "Request id is missing!",
        details: "please check the request details and try again.",
      });
    }
  }
}

export default new DeleteAdmin();
