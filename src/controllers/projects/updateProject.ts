import { Request, Response } from "express";
import CloudinaryUploader from "../../utils/cloud-uploader/cloudUploader";
import projectModel from "../../models/projectsCollection";
import Destroyer from "../../utils/cloud-destroyed/cloudDestroyer";
interface FileUploadFields {
  projectLogoUrl?: Express.Multer.File[];
  firstPageImageUrl?: Express.Multer.File[];
  secondPageImageUrl?: Express.Multer.File[];
  thirdPageImageUrl?: Express.Multer.File[];
}
class ExistingProject {
  public async updateCtrl(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const files = req.files as FileUploadFields;
      let techStack: [string];
      let uploader = new CloudinaryUploader();
      let destroyer = new Destroyer();
      let previousProject = await projectModel.findById(id);
      let projectLogoPath = files.projectLogoUrl;
      let firstPageImagePath = files.firstPageImageUrl;
      let secondPageImagePath = files.secondPageImageUrl;
      let thirdPageImagePath = files.thirdPageImageUrl;

      let projectLogoUrl;
      let firstPageImageUrl;
      let secondPageImageUrl;
      let thirdPageImageUrl;

      if (projectLogoPath !== undefined) {
        projectLogoUrl = await uploader.uploadSingle(
          projectLogoPath[0].buffer,
          "all_projects"
        );
      }
      if (firstPageImagePath !== undefined) {
        firstPageImageUrl = await uploader.uploadSingle(
          firstPageImagePath[0].buffer,
          "all_projects"
        );
      }
      if (secondPageImagePath !== undefined) {
        secondPageImageUrl = await uploader.uploadSingle(
          secondPageImagePath[0].buffer,
          "all_projects"
        );
      }

      if (thirdPageImagePath !== undefined) {
        thirdPageImageUrl = await uploader.uploadSingle(
          thirdPageImagePath[0].buffer,
          "all_projects"
        );
      }

      if (previousProject) {
        const newProjectLogoUrl = projectLogoPath
          ? projectLogoUrl?.storedDataAccessUrl
          : previousProject.projectLogoUrl;

        const newFirstPageImageUrl = firstPageImagePath
          ? firstPageImageUrl?.storedDataAccessUrl
          : previousProject.firstPageImageUrl;

        const newSecondPageImageUrl = secondPageImagePath
          ? secondPageImageUrl?.storedDataAccessUrl
          : previousProject.secondPageImageUrl;

        const newThirdPageImageUrl = thirdPageImagePath
          ? thirdPageImageUrl?.storedDataAccessUrl
          : previousProject.thirdPageImageUrl;

        if (!Array.isArray(req.body.technologyUsed)) {
          techStack = [req.body.technologyUsed];
        }

        const updatedData = {
          projectName: req.body.projectName
            ? req.body.projectName
            : previousProject.projectName,

          author: req.body.author ? req.body.author : previousProject.author,

          projectType: req.body.projectType
            ? req.body.projectType
            : previousProject.projectType,

          owner: req.body.owner ? req.body.owner : previousProject.owner,

          description: req.body.description
            ? req.body.description
            : previousProject.description,

          projectLogoUrl: newProjectLogoUrl,

          projectLogoPublicId: newProjectLogoUrl
            ? projectLogoUrl?.storedDataAccessId
            : previousProject.projectLogoPublicId,

          firstPageImageUrl: newFirstPageImageUrl,

          firstPageImagePublicId: newFirstPageImageUrl
            ? firstPageImageUrl?.storedDataAccessId
            : previousProject.firstPageImagePublicId,

          secondPageImageUrl: newSecondPageImageUrl,

          secondPageImagePublicId: newSecondPageImageUrl
            ? secondPageImageUrl?.storedDataAccessId
            : previousProject.secondPageImagePublicId,

          thirdPageImageUrl: newThirdPageImageUrl,

          thirdPageImagePublicId: newThirdPageImageUrl
            ? thirdPageImageUrl?.storedDataAccessId
            : previousProject.thirdPageImagePublicId,

          liveProjectUrl: req.body.liveProjectUrl
            ? req.body.liveProjectUrl
            : previousProject.liveProjectUrl,

          githubRepoUrl: req.body.githubRepoUrl
            ? req.body.githubRepoUrl
            : previousProject.githubRepoUrl,

          technologyUsed: req.body.technologyUsed
            ? req.body.technologyUsed
            : previousProject.technologyUsed,
        };
        projectLogoUrl &&
          (await destroyer.cloudAssets(previousProject.projectLogoPublicId));
        firstPageImageUrl &&
          (await destroyer.cloudAssets(previousProject.firstPageImagePublicId));
        secondPageImageUrl &&
          (await destroyer.cloudAssets(
            previousProject.secondPageImagePublicId
          ));
        thirdPageImageUrl &&
          (await destroyer.cloudAssets(previousProject.thirdPageImagePublicId));

        const updateProject = await projectModel.findByIdAndUpdate(
          id,
          updatedData,
          { new: true }
        );

        if (updateProject) {
          return <any>res.status(200).json({
            message: "Patch successful!",
            details: "Requested resources updated successfully.",
          });
        } else {
          return <any>res.status(501).json({
            message: "Not Implemented!",
            details: "Something went wrong please try again later.",
          });
        }
      } else {
        return <any>res.status(404).json({
          issue: "Not Found!",
          details: "Requested project are not found",
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
export default new ExistingProject();
