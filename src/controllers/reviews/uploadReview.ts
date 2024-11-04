import { Request, Response } from "express";
import reviewModel from "../../models/reviewCollection";

class NewReviews {
  public async uploadCtrl(req: Request, res: Response): Promise<void> {
    const { userName, organization, gender, reviewContent, rating } = req.body;
    let ratings: [number];
    try {
      if (userName && organization && gender && reviewContent && rating) {
        if (!Array.isArray(rating)) {
          ratings = [rating];
        }
        const newReviews = new reviewModel({
          userName,
          organization,
          gender,
          reviewContent,
          rating,
        });
        const saveData = await newReviews.save();
        if (!saveData) {
          return <any>res.status(501).json({
            issue: "Not Implemented!",
            details: "Requested data not been saved, please try again later.",
          });
        } else {
          return <any>res.status(201).json({
            message: "Thanks for your valuable review!",
            details: "Requested data has been saved successfully.",
          });
        }
      } else {
        return <any>res.status(402).json({
          issue: "Bad request!",
          details: "All fields are required.",
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
export default new NewReviews();
