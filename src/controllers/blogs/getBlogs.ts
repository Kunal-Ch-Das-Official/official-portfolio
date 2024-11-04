import { Request, Response } from "express";
import blogModel from "../../models/blogCollection";

class BlogsInfo {
  public async getCtrl(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      if (id) {
        const findSingleBlog = await blogModel.findById(id);
        if (!findSingleBlog) {
          return <any>res.status(404).json({
            issue: "Not Found!",
            details: "Requested blog dose not exist.",
          });
        } else {
          return <any>res.status(200).json(findSingleBlog);
        }
      } else {
        const findAllBlog = await blogModel.find();
        if (!findAllBlog) {
          return <any>res.status(404).json({
            issue: "Not Found!",
            details: "Requested blogs dose not exist.",
          });
        } else {
          return <any>res.status(200).json(findAllBlog);
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
export default new BlogsInfo();
