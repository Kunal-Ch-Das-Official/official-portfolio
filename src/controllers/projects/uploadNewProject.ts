import { Request, Response } from "express";
import projectModel from "../../models/projectsCollection";
import CloudinaryUploader from "../../utils/cloud-uploader/cloudUploader";

// Define an interface for the expected structure of req.files
interface FileUploadFields {
  projectLogoUrl?: Express.Multer.File[];
  firstPageImageUrl?: Express.Multer.File[];
  secondPageImageUrl?: Express.Multer.File[];
  thirdPageImageUrl?: Express.Multer.File[];
}
class NewProject {
  public async uploadCtrl(req: Request, res: Response): Promise<void> {
    const {
      projectName,
      author,
      projectType,
      owner,
      description,
      liveProjectUrl,
      githubRepoUrl,
      technologyUsed,
    } = req.body;
    // Type assertion for req.files
    const files = req.files as FileUploadFields;
    let techStack: [string];
    let uploader = new CloudinaryUploader();
    let allRequiredImage = [];
    try {
      if (!files) {
        return <any>res.status(400).json({
          issue: "No files were uploaded.",
          details: "Files are required!",
        });
      } else {
        const projectLogoUrl = files.projectLogoUrl;
        const firstPageImageUrl = files.firstPageImageUrl;
        const secondPageImageUrl = files.secondPageImageUrl;
        const thirdPageImageUrl = files.thirdPageImageUrl;
        // Check if all required files are present
        if (
          !projectLogoUrl ||
          !firstPageImageUrl ||
          !secondPageImageUrl ||
          !thirdPageImageUrl
        ) {
          return <any>res.status(400).json({
            issue: "All files are required!",
            details: "One or more required files are missing.",
          });
        } else {
          const projectImages = [
            projectLogoUrl[0].buffer,
            firstPageImageUrl[0].buffer,
            secondPageImageUrl[0].buffer,
            thirdPageImageUrl[0].buffer,
          ];

          if (!Array.isArray(technologyUsed)) {
            techStack = [technologyUsed];
          }

          for (const path of projectImages) {
            try {
              const result = await uploader.uploadSingle(path, "all_projects");
              if (result) {
                const { storedDataAccessUrl, storedDataAccessId } = result;
                allRequiredImage.push({
                  secureUrl: storedDataAccessUrl,
                  publicId: storedDataAccessId,
                });
              }
            } catch (error: any) {
              return <any>res.status(500).json({
                issue: error.message,
                details: "cloudinary error occured.",
              });
            }
          }

          const projectInfo = new projectModel({
            projectName,
            author,
            projectType,
            owner,
            description,
            liveProjectUrl,
            githubRepoUrl,
            technologyUsed,
            projectLogoUrl: allRequiredImage[0].secureUrl,
            projectLogoPublicId: allRequiredImage[0].publicId,
            firstPageImageUrl: allRequiredImage[1].secureUrl,
            firstPageImagePublicId: allRequiredImage[1].publicId,
            secondPageImageUrl: allRequiredImage[2].secureUrl,
            secondPageImagePublicId: allRequiredImage[2].publicId,
            thirdPageImageUrl: allRequiredImage[3].secureUrl,
            thirdPageImagePublicId: allRequiredImage[3].publicId,
          });
          const uploadProjectInfo = projectInfo.save();
          if (!uploadProjectInfo) {
            return <any>res.status(501).json({
              issue: "Not Implemented!",
              details: "Something went wrong, please try again later.",
            });
          } else {
            return <any>res.status(201).json({
              message: "Successfully Uploaded!",
              details: "Project information has been uploaded successfully.",
            });
          }
        }
      }
    } catch (error: any) {
      console.log(error);
      return <any>res.status(500).json({
        issue: error.message,
        details: "Something went wrong, please try again later.",
      });
    }
  }
}

export default new NewProject();
