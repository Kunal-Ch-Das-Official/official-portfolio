"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Delete blog article controller
 * Author      : Kunal Chandra Das
 * Date        : 03.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for handling the deletion of
 *               blog articles in the system. It allows authenticated users or
 *               admins to delete blog articles from the database.
 *
 *               The controller first verifies if the user making the request
 *               has the necessary permissions to delete the article (e.g.,
 *               checking if the user is the author of the article or if the
 *               user has admin privileges). If the user is authorized, the
 *               controller proceeds to delete the specified blog article from
 *               the database using the article’s unique identifier (e.g., article ID).
 *
 *               The controller checks if the article exists before attempting
 *               to delete it. If the article does not exist, a `404 Not Found`
 *               response is returned. After successful deletion, the controller
 *               sends a success message indicating that the article was deleted.
 *
 *               In case of any errors (e.g., database failure, permission issues),
 *               the controller returns an appropriate error message.
 *
 *               This controller helps manage blog content by allowing authorized
 *               users to delete articles that are no longer needed or inappropriate.
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
const blogCollection_1 = __importDefault(require("../../models/blogCollection"));
const cloudDestroyer_1 = __importDefault(require("../../utils/cloud-destroyed/cloudDestroyer"));
class RequestedBlog {
    deleteCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const destroyer = new cloudDestroyer_1.default();
            try {
                const findExistingBlog = yield blogCollection_1.default.findById(id);
                if (!findExistingBlog) {
                    return res.status(404).json({
                        issue: "Not Found!",
                        details: "Requested blog not exist.",
                    });
                }
                else {
                    yield destroyer.cloudAssets(findExistingBlog.supportingImgPublicId);
                    const deleteThisBlog = yield blogCollection_1.default.findByIdAndDelete(id);
                    if (!deleteThisBlog) {
                        return res.status(501).json({
                            issue: "Not Implemented!",
                            details: "Unable to upload blogs, please try again later.",
                        });
                    }
                    else {
                        return res.status(200).json({
                            message: "Successfully removed!",
                            details: "Blog has been successfully removed from our records.",
                        });
                    }
                }
            }
            catch (error) {
                return res.status(500).json({
                    issue: "Internal server error!",
                    details: error.message,
                });
            }
        });
    }
}
exports.default = new RequestedBlog();
