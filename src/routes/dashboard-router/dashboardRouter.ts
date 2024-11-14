import AuthValidator from "../../middlewares/auth-validator/authValidator";
import Dashboard from "../../controllers/dashboard/getAllContent";
import { Router } from "express";

const dashboardRouter = Router();

dashboardRouter.get(
  "/all-content",
  AuthValidator.validate,
  Dashboard.allContent
);

export default dashboardRouter;
