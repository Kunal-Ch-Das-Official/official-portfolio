import { Request, Response } from "express";
import projectModel from "../../models/projectsCollection";
import cloudinaryConfig from "../../config/cloudinaryConfig";

class RequestedProject {
  public async deleteCtrl(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const getRequestedInfo = await projectModel.findById(id);
      if (!getRequestedInfo) {
        return <any>res.status(404).json({
          issue: "Not found!",
          details: "Requested resources are not found.",
        });
      } else {
        const {
          projectLogoPublicId,
          firstPageImagePublicId,
          secondPageImagePublicId,
          thirdPageImagePublicId,
        } = getRequestedInfo;

        const allPublicId = [
          projectLogoPublicId,
          firstPageImagePublicId,
          secondPageImagePublicId,
          thirdPageImagePublicId,
        ];
        const deleteAllAssets = await cloudinaryConfig.api.delete_resources(
          allPublicId,
          {
            type: "upload",
            resource_type: "image",
          }
        );
        if (deleteAllAssets) {
          const deleted = await projectModel.findByIdAndDelete(id);
          if (deleted) {
            return <any>res.status(200).json({
              message: "Removed successfully!",
              details: "Requested resources has been successfully removed.",
            });
          } else {
            return <any>res.status(501).json({
              issue: "Not Implemented!",
              details: "Something went wrong, please try again later.",
            });
          }
        } else {
          return <any>res.status(501).json({
            issue: "Cloudinary error!",
            details: "Something went wrong, please try again later.",
          });
        }
      }
    } catch (error) {
      return <any>res.status(500).json({
        issue: "Internal server error!",
        details: "Something went wrong, please try again later.",
      });
    }
  }
}
export default new RequestedProject();
