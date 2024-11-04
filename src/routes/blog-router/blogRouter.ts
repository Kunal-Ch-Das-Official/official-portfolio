import { Router } from "express";
import NewBlogs from "../../controllers/blogs/uploadBlogs";
import multerUploader from "../../middlewares/muter/multerUploader";
import authValidator from "../../middlewares/auth-validator/authValidator";
import ExistingBlog from "../../controllers/blogs/updateBlogs";
import RequestedBlog from "../../controllers/blogs/deleteBlogs";
import BlogsInfo from "../../controllers/blogs/getBlogs";

const blogRouter = Router();

blogRouter.post(
  "/content",
  authValidator.validate,
  multerUploader.single("supportingImgUrl"),
  NewBlogs.uploadCtrl
);

blogRouter.patch(
  "/content/:id",
  authValidator.validate,
  multerUploader.single("supportingImgUrl"),
  ExistingBlog.updateCtrl
);

blogRouter.delete(
  "/content/:id",
  authValidator.validate,
  RequestedBlog.deleteCtrl
);

blogRouter.get("/content/:id", BlogsInfo.getCtrl);

blogRouter.get("/content", BlogsInfo.getCtrl);

export default blogRouter;
