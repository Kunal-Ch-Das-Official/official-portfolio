import { Router } from "express";
import NewReviews from "../../controllers/reviews/uploadReview";
import ExistingReview from "../../controllers/reviews/deleteReview";
import ReviewInfo from "../../controllers/reviews/getReviews";
import authValidator from "../../middlewares/auth-validator/authValidator";
const reviewsRouter = Router();

reviewsRouter.post("/client", NewReviews.uploadCtrl);
reviewsRouter.delete(
  "/client/:id",
  authValidator.validate,
  ExistingReview.deleteCtrl
);
reviewsRouter.get("/client", ReviewInfo.getCtrl);
export default reviewsRouter;
