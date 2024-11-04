import { Request, Response } from "express";
import CloudinaryUploader from "../../utils/cloud-uploader/cloudUploader";
import blogModel from "../../models/blogCollection";
interface IFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}
class NewBlogs {
  public async uploadCtrl(req: Request, res: Response): Promise<void> {
    const file = req.file as IFile;
    const imageBuffer = file.buffer;
    let uploader = new CloudinaryUploader();
    const {
      blogTitle,
      authorName,
      statementHeading,
      statement,
      corespondingCode,
      commandLine,
    } = req.body;

    try {
      if (file && req.body) {
        const cloudUpload = await uploader.uploadSingle(
          imageBuffer,
          "Blog_Assets"
        );
        if (!cloudUpload) {
          return <any>res.status(500).json({
            issue: "Cloudinary upload error!",
            details: "Something went wrong please try again later.",
          });
        } else {
          const { storedDataAccessUrl, storedDataAccessId } = cloudUpload;
          const uploadNewBlog = new blogModel({
            blogTitle,
            authorName,
            supportingImgUrl: storedDataAccessUrl,
            supportingImgPublicId: storedDataAccessId,
            statementHeading,
            statement,
            corespondingCode,
            commandLine,
          });

          const saveBlog = await uploadNewBlog.save();
          if (!saveBlog) {
            return <any>res.status(501).json({
              issue: "Not Implemented!",
              details: "Unable to upload blogs, please try again later.",
            });
          } else {
            return <any>res.status(201).json({
              message: "Successfully uploded!",
              details: "Blog has been successfully uploaded to our records.",
            });
          }
        }
      } else {
        return <any>res.status(402).json({
          issue: "Bad Request!",
          details: "All fields are required.",
        });
      }
    } catch (error: any) {
      return <any>res.status(500).json({
        issue: "Internal server error!",
        details: error.message,
      });
    }
  }
}
export default new NewBlogs();
