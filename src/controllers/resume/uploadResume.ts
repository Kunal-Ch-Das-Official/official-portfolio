import { Request, Response } from "express";
import CloudinaryUploader from "../../utils/cloud-uploader/cloudUploader";
import resumeModel from "../../models/resumeCollection";
interface IFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}
class NewResume {
  public async uploadCtrl(req: Request, res: Response): Promise<void> {
    try {
      const file = req.file as IFile;
      const resumeBuffer = file.buffer;
      let uploader = new CloudinaryUploader();
      if (file) {
        const cloudUpload = await uploader.uploadSingle(resumeBuffer, "Resume");
        if (!cloudUpload) {
          return <any>res.status(500).json({
            issue: "Cloudinary upload error!",
            details: "Something went wrong please try again later.",
          });
        } else {
          const { storedDataAccessId, storedDataAccessUrl } = cloudUpload;
          const resumeInfo = new resumeModel({
            resumeUrl: storedDataAccessUrl,
            resumePublicId: storedDataAccessId,
          });
          const saveResume = await resumeInfo.save();
          if (!saveResume) {
            return <any>res.status(501).json({
              issue: "Not Implemented!",
              details: "Unable to upload resume, please try again later.",
            });
          } else {
            return <any>res.status(201).json({
              message: "Successfully uploded!",
              details:
                "New resume has been successfully uploaded to our records.",
            });
          }
        }
      } else {
        return <any>res.status(402).json({
          issue: "Bad Request!",
          details: "Fields are required.",
        });
      }
    } catch (error: any) {
      return <any>res.status(402).json({
        issue: "Internal server error!",
        details: error.message,
      });
    }
  }
}
export default new NewResume();
