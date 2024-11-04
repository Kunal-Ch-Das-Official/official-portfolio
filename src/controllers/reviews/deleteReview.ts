import { Request, Response } from "express";
import reviewModel from "../../models/reviewCollection";

class ExistingReview {
  public async deleteCtrl(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const getRequestedData = await reviewModel.findById(id);
      if (!getRequestedData) {
        return <any>res.status(404).json({
          issue: "Not found!",
          details: "The requested data was not found.",
        });
      } else {
        const deleteInfo = await reviewModel.findByIdAndDelete(id);
        if (!deleteInfo) {
          return <any>res.status(501).json({
            issue: "Not implemented!",
            details: "Requested data not been deleted, please try again later.",
          });
        } else {
          return <any>res.status(200).json({
            issue: "Successfully removed!",
            details:
              "Requested data has been successfully removed from our records",
          });
        }
      }
    } catch (error: any) {
      return <any>res.status(500).json({
        issue: "Internal server error!",
        details: error.message,
      });
    }
  }
}

export default new ExistingReview();
