import { Request, Response } from "express";
import blogModel from "../../models/blogCollection";
import Destroyer from "../../utils/cloud-destroyed/cloudDestroyer";

class RequestedBlog {
  public async deleteCtrl(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const destroyer = new Destroyer();
    try {
      const findExistingBlog = await blogModel.findById(id);
      if (!findExistingBlog) {
        return <any>res.status(404).json({
          issue: "Not Found!",
          details: "Requested blog not exist.",
        });
      } else {
        await destroyer.cloudAssets(findExistingBlog.supportingImgPublicId);
        const deleteThisBlog = await blogModel.findByIdAndDelete(id);
        if (!deleteThisBlog) {
          return <any>res.status(501).json({
            issue: "Not Implemented!",
            details: "Unable to upload blogs, please try again later.",
          });
        } else {
          return <any>res.status(200).json({
            message: "Successfully removed!",
            details: "Blog has been successfully removed from our records.",
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

export default new RequestedBlog();
