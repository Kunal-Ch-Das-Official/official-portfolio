import { Router } from "express";
import NewResume from "../../controllers/resume/uploadResume";
import multerUploader from "../../middlewares/muter/multerUploader";
import ExistingResume from "../../controllers/resume/updateResume";
import RequestedResume from "../../controllers/resume/deleteResume";
import ResumeInfo from "../../controllers/resume/getResume";
import authValidator from "../../middlewares/auth-validator/authValidator";

const resumeRouter = Router();
resumeRouter.post(
  "/kunal-chandra-das",
  authValidator.validate,
  multerUploader.single("resumeUrl"),
  NewResume.uploadCtrl
);

resumeRouter.put(
  "/kunal-chandra-das/:id",
  authValidator.validate,
  multerUploader.single("resumeUrl"),
  ExistingResume.updateCtrl
);

resumeRouter.delete(
  "/kunal-chandra-das/:id",
  authValidator.validate,
  RequestedResume.deleteCtrl
);

resumeRouter.get("/kunal-chandra-das/:id", ResumeInfo.getCtrl);

resumeRouter.get("/kunal-chandra-das", ResumeInfo.getCtrl);
export default resumeRouter;
