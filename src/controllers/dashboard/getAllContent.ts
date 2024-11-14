import { Request, Response } from "express";
import authAdminUserModel from "../../models/authAdminCollection";
import blogModel from "../../models/blogCollection";
import contactModel from "../../models/contactInfoCollection";
import projectModel from "../../models/projectsCollection";
import resumeModel from "../../models/resumeCollection";
import reviewModel from "../../models/reviewCollection";
class Dashboard {
  public async allContent(req: Request, res: Response): Promise<void> {
    const aggregatedData = [];
    try {
      // 1.  Total admin account
      const getTotalAdmin = await authAdminUserModel.find();
      if (getTotalAdmin) {
        const totalAdmin = {
          response: getTotalAdmin,
        };
        aggregatedData.push(totalAdmin);
      }
      // 2. total blog article
      const getTotalArticle = await blogModel.find();
      if (getTotalArticle) {
        const totalArticle = {
          response: getTotalArticle,
        };
        aggregatedData.push(totalArticle);
      }
      // 3. total contact person
      const getTotalContactApplications = await contactModel.find();
      if (getTotalContactApplications) {
        const totalApplications = {
          response: getTotalContactApplications,
        };
        aggregatedData.push(totalApplications);
      }
      // 4. total projects
      const getTotalProjects = await projectModel.find();
      if (getTotalProjects) {
        const allProjects = {
          response: getTotalProjects,
        };
        aggregatedData.push(allProjects);
      }
      // 5. resume available ?
      const getResume = await resumeModel.find();
      if (getResume) {
        const resume = {
          response: getResume,
        };
        aggregatedData.push(resume);
      }
      // 6. total feedbacks and reviews
      const getAllFeedbacks = await reviewModel.find();
      if (getAllFeedbacks) {
        const allReviews = {
          response: getAllFeedbacks,
        };
        aggregatedData.push(allReviews);
      }

      return <any>res.status(200).json(aggregatedData);
    } catch (error: any) {
      return <any>(
        res
          .status(500)
          .json({ issue: "Internal server error!", details: error.message })
      );
    }
  }
}

export default new Dashboard();
