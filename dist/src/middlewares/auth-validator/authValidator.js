"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Validate user authentication
 * Author      : Kunal Chandra Das
 * Date        : 01.11.2024
 * Version     : 2.0.0
 * Details     : This middleware handles the authentication validation for
 *               protected routes. It checks the validity of the JWT token
 *               provided in the request header.
 *
 *               The middleware first extracts the token from the `Authorization`
 *               header. If the token is missing or invalid, it returns a `401 Unauthorized`
 *               response, indicating that the user is not authenticated.
 *
 *               If the token is valid, the middleware decodes the token and adds
 *               the user’s information (e.g., user ID) to the request object, allowing
 *               the next middleware or route handler to access it.
 *
 *               In case of any issues with decoding or verification, a `403 Forbidden`
 *               response is returned, signaling that the user does not have access.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envConfig_1 = __importDefault(require("../../config/envConfig"));
const authAdminCollection_1 = __importDefault(require("../../models/authAdminCollection"));
class AuthValidator {
    validate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { authorization } = req.headers;
            if (authorization &&
                typeof authorization === "string" &&
                authorization.startsWith("Bearer ")) {
                const token = authorization.split(" ")[1];
                try {
                    // Type assertion for decoded token
                    const decoded = jsonwebtoken_1.default.verify(token, envConfig_1.default.jwtSecretKey);
                    // Now you can safely access adminId
                    const user = yield authAdminCollection_1.default
                        .findById(decoded.adminId)
                        .select("-adminUserPassword");
                    if (!user) {
                        return (res
                            .status(404)
                            .json({ issue: "Not Found", details: "Admin user not found." }));
                    }
                    else {
                        req.currentUser = user;
                        next();
                    }
                }
                catch (error) {
                    return (res
                        .status(401)
                        .json({ issue: "Unauthorized!", details: error.message }));
                }
            }
            else {
                return res.status(400).json({
                    issue: "Bad Request",
                    details: "Authorization header is required.",
                });
            }
        });
    }
}
exports.default = new AuthValidator();
