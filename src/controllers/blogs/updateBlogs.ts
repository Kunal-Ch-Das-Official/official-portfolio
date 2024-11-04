import { Request, Response } from "express";
import CloudinaryUploader from "../../utils/cloud-uploader/cloudUploader";
import Destroyer from "../../utils/cloud-destroyed/cloudDestroyer";
import blogModel from "../../models/blogCollection";
interface IFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}
class ExistingBlog {
  public async updateCtrl(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const file = req.file as IFile;
    const imageBuffer = file.buffer;
    let uploader = new CloudinaryUploader();
    let destroyer = new Destroyer();

    const {
      blogTitle,
      authorName,
      statementHeading,
      statement,
      corespondingCode,
      commandLine,
    } = req.body;

    try {
      const findExistingBlog = await blogModel.findById(id);
      if (!findExistingBlog) {
        return <any>res.status(404).json({
          issue: "Not Found!",
          details: "Requested blog not exist.",
        });
      } else {
        let imageUpload;
        if (file) {
          imageUpload = await uploader.uploadSingle(imageBuffer, "Blog_Assets");
          await destroyer.cloudAssets(findExistingBlog.supportingImgPublicId);
        }

        const newBlogTitle = blogTitle || findExistingBlog.blogTitle;
        const newAuthorName = authorName || findExistingBlog.authorName;
        const newStatementHeading =
          statementHeading || findExistingBlog.statementHeading;
        const newStatement = statement || findExistingBlog.statement;
        const newCorespondingCode =
          corespondingCode || findExistingBlog.corespondingCode;
        const newCommandLine = commandLine || findExistingBlog.commandLine;
        const newImageUrl = file
          ? imageUpload?.storedDataAccessUrl
          : findExistingBlog.supportingImgUrl;
        const newPublicId = file
          ? imageUpload?.storedDataAccessId
          : findExistingBlog.supportingImgPublicId;

        const updatedData = {
          blogTitle: newBlogTitle,
          authorName: newAuthorName,
          supportingImgUrl: newImageUrl,
          supportingImgPublicId: newPublicId,
          statementHeading: newStatementHeading,
          statement: newStatement,
          corespondingCode: newCorespondingCode,
          commandLine: newCommandLine,
        };

        const updateBlog = await blogModel.findByIdAndUpdate(id, updatedData, {
          new: true,
        });
        if (!updateBlog) {
          return <any>res.status(501).json({
            issue: "Not Implemented!",
            details: "Unable to upload blog, please try again later.",
          });
        } else {
          return <any>res.status(200).json({
            message: "Update Successful!",
            details: "Blog Info has been successfully updated.",
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
export default new ExistingBlog();
