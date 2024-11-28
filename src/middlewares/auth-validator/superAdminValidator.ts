import { Request, NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import envConfig from "../../config/envConfig";
import authAdminUserModel from "../../models/authAdminCollection";

interface DecodedToken {
  superAdminId: string;
  // Add other properties if your token has them
}
declare module "express-serve-static-core" {
  interface Request {
    currentUser?: any;
  }
}

class SuperAdminValidator {
  public async validate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { authorization } = req.headers;

    if (
      authorization &&
      typeof authorization === "string" &&
      authorization.startsWith("Bearer ")
    ) {
      const uniqueId = authorization.split(" ")[1];

      try {
        // Type assertion for decoded token
        const decoded = jwt.verify(
          uniqueId,
          envConfig.uniqueSecretKey
        ) as DecodedToken;

        // Now you can safely access adminId
        const user = await authAdminUserModel
          .findById(decoded.superAdminId)
          .select("-adminUserPassword");

        if (!user) {
          return <any>res.status(404).json({
            issue: "Not Found",
            details: "Super Admin user not found.",
          });
        } else {
          req.currentUser = user;
          next();
        }
      } catch (error: any) {
        return <any>(
          res
            .status(401)
            .json({ issue: "Unauthorized!", details: error.message })
        );
      }
    } else {
      return <any>res.status(400).json({
        issue: "Bad Request",
        details: "Authorization header is required.",
      });
    }
  }
}

export default new SuperAdminValidator();
