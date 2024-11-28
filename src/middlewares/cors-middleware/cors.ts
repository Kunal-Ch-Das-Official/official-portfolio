import envConfig from "../../config/envConfig";
import { Request, NextFunction, Response } from "express";

class CrossOrigin {
  public allowOrigin(req: Request, res: Response, next: NextFunction): void {
    const { origin } = req.headers;
    const allowedOrigins = [
      envConfig.localOriginOne,
      envConfig.localOriginTwo,
      envConfig.hostOriginOne,
      envConfig.hostOriginTwo,
    ];

    if (origin && allowedOrigins.includes(origin)) {
      next(); // Allow the request to proceed
    } else {
      res.status(403).json({
        issue: "Forbidden",
        message: "This origin is not allowed to access the server.",
      });
    }
  }
}

export default new CrossOrigin();
