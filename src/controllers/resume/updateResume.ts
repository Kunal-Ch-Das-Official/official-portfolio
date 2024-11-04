import { Request, Response } from "express";
import resumeModel from "../../models/resumeCollection";
import Destroyer from "../../utils/cloud-destroyed/cloudDestroyer";
import CloudinaryUploader from "../../utils/cloud-uploader/cloudUploader";
interface IFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}
class ExistingResume {
  public async updateCtrl(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const file = req.file as IFile;
      const resumeBuffer = file.buffer;
      let uploader = new CloudinaryUploader();
      let destroyer = new Destroyer();

      let existingResume = await resumeModel.findById(id);
      if (!existingResume) {
        return <any>res.status(404).json({
          issue: "Not Found!",
          details: "Requested resume not exist.",
        });
      } else {
        const uploadNewResume = await uploader.uploadSingle(
          resumeBuffer,
          "Resume"
        );
        if (!uploadNewResume) {
          return <any>res.status(500).json({
            issue: "Cloudinary upload error!",
            details: "Something went wrong please try again later.",
          });
        } else {
          const { storedDataAccessUrl, storedDataAccessId } = uploadNewResume;
          const updatedResume = {
            resumeUrl: storedDataAccessUrl,
            resumePublicId: storedDataAccessId,
          };
          const { resumePublicId } = existingResume;
          await destroyer.cloudAssets(resumePublicId);
          const resumeUpdate = await resumeModel.findByIdAndUpdate(
            id,
            updatedResume,
            { new: true }
          );
          if (!resumeUpdate) {
            return <any>res.status(501).json({
              issue: "Not Implemented!",
              details: "Unable to upload resume, please try again later.",
            });
          } else {
            return <any>res.status(201).json({
              message: "Update Successful!",
              details: "New resume has been successfully updated.",
            });
          }
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
export default new ExistingResume();
