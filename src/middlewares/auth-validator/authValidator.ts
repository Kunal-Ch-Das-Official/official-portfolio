import { Request, NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import envConfig from "../../config/envConfig";
import authAdminUserModel from "../../models/authAdminCollection";

interface DecodedToken {
  adminId: string;
  // Add other properties if your token has them
}
declare module "express-serve-static-core" {
  interface Request {
    currentUser?: any;
  }
}

class AuthValidator {
  public async validator(
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
      const token = authorization.split(" ")[1];

      try {
        // Type assertion for decoded token
        const decoded = jwt.verify(
          token,
          envConfig.jwtSecretKey
        ) as DecodedToken;

        // Now you can safely access adminId
        const user = await authAdminUserModel
          .findById(decoded.adminId)
          .select("-adminUserPassword");

        if (!user) {
          return <any>(
            res
              .status(404)
              .json({ issue: "Not Found", details: "Admin user not found." })
          );
        } else {
          req.currentUser = user;
          next();
        }
      } catch (error) {
        return <any>(
          res
            .status(401)
            .json({ issue: "Unauthorized!", details: "Invalid token." })
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

export default new AuthValidator();
