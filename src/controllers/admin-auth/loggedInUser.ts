import { Request, Response } from "express";
class LoggedIn {
  public async currentUser(req: Request, res: Response): Promise<void> {
    try {
      if (req.currentUser) {
        return <any>res.status(200).json({
          userDetails: req.currentUser,
        });
      } else {
        return <any>res.status(400).json({
          issue: "Bad Request!",
          details: "Request are not valid.",
        });
      }
    } catch (error: any) {
      return <any>res.status(500).json({
        issue: error.message,
        details:
          "Unable to perform this operation due to some technical problem",
      });
    }
  }
}
export default new LoggedIn();
