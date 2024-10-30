import { Router } from "express";
import NewProject from "../../controllers/projects/uploadNewProject";
import multerUploader from "../../middlewares/muter/multerUploader";
import authValidator from "../../middlewares/auth-validator/authValidator";

const projectsRouter = Router();
const requiredProjectImage = multerUploader.fields([
  { name: "projectLogoUrl", maxCount: 1 },
  { name: "firstPageImageUrl", maxCount: 1 },
  { name: "secondPageImageUrl", maxCount: 1 },
  { name: "thirdPageImageUrl", maxCount: 1 },
]);
// Upload new project route
projectsRouter.post(
  "/operation/url",
  authValidator.validate,
  requiredProjectImage,
  NewProject.upload
);

export default projectsRouter;
