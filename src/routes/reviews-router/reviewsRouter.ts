import { Router } from "express";
import NewReviews from "../../controllers/reviews/uploadReview";
import ExistingReview from "../../controllers/reviews/deleteReview";
import ReviewInfo from "../../controllers/reviews/getReviews";
const reviewsRouter = Router();

reviewsRouter.post("/review", NewReviews.uploadCtrl);
reviewsRouter.delete("/review/:id", ExistingReview.deleteCtrl);
reviewsRouter.get("/review", ReviewInfo.getCtrl);
export default reviewsRouter;
