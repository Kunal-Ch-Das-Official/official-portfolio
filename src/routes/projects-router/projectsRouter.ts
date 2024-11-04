import { Router } from "express";
import NewProject from "../../controllers/projects/uploadNewProject";
import multerUploader from "../../middlewares/muter/multerUploader";
import authValidator from "../../middlewares/auth-validator/authValidator";
import ExistingProject from "../../controllers/projects/updateProject";
import RequestedProject from "../../controllers/projects/deleteProject";

const projectsRouter = Router();
const requiredProjectImage = multerUploader.fields([
  { name: "projectLogoUrl", maxCount: 1 },
  { name: "firstPageImageUrl", maxCount: 1 },
  { name: "secondPageImageUrl", maxCount: 1 },
  { name: "thirdPageImageUrl", maxCount: 1 },
]);
//1. Upload new project route
projectsRouter.post(
  "/operation/url",
  // authValidator.validate,
  requiredProjectImage,
  NewProject.uploadCtrl
);

//2. Update existing project route
projectsRouter.patch(
  "/operation/url/:id",
  requiredProjectImage,
  ExistingProject.updateCtrl
);

//3. Delete existing project route
projectsRouter.delete("/operation/url/:id", RequestedProject.deleteCtrl);

export default projectsRouter;
