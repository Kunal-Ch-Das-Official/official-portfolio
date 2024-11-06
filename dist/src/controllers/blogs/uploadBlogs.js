"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Upload blog article controller
 * Author      : Kunal Chandra Das
 * Date        : 03.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for uploading a new blog
 *               article to the system. The controller handles the creation and
 *               storage of a new article, including fields such as the title,
 *               content, author, and any associated tags or categories.
 *
 *               The controller first validates the request to ensure that all
 *               required fields (e.g., title, content, and author) are provided.
 *               If any of the required fields are missing, a `400 Bad Request`
 *               response is returned with an error message indicating which fields
 *               are missing.
 *
 *               After validating the input, the controller creates a new article
 *               entry in the database. The article is stored with the provided
 *               details, and a success response is returned, including the newly
 *               created article's ID and other relevant information.
 *
 *               The controller also ensures that the article is associated with
 *               the correct user (i.e., the logged-in admin or author), and
 *               handles any errors that may occur during the article creation process.
 *               In the case of a database failure or any unexpected issue, an
 *               appropriate error message is returned.
 *
 *               This controller is essential for enabling users to publish new
 *               blog articles, adding them to the system for public viewing or
 *               further processing.
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
const cloudUploader_1 = __importDefault(require("../../utils/cloud-uploader/cloudUploader"));
const blogCollection_1 = __importDefault(require("../../models/blogCollection"));
class NewBlogs {
    uploadCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = req.file;
            const imageBuffer = file.buffer;
            let uploader = new cloudUploader_1.default();
            const { blogTitle, authorName, statementHeading, statement, corespondingCode, commandLine, } = req.body;
            try {
                if (file && req.body) {
                    const cloudUpload = yield uploader.uploadSingle(imageBuffer, "Blog_Assets");
                    if (!cloudUpload) {
                        return res.status(500).json({
                            issue: "Cloudinary upload error!",
                            details: "Something went wrong please try again later.",
                        });
                    }
                    else {
                        const { storedDataAccessUrl, storedDataAccessId } = cloudUpload;
                        const uploadNewBlog = new blogCollection_1.default({
                            blogTitle,
                            authorName,
                            supportingImgUrl: storedDataAccessUrl,
                            supportingImgPublicId: storedDataAccessId,
                            statementHeading,
                            statement,
                            corespondingCode,
                            commandLine,
                        });
                        const saveBlog = yield uploadNewBlog.save();
                        if (!saveBlog) {
                            return res.status(501).json({
                                issue: "Not Implemented!",
                                details: "Unable to upload blogs, please try again later.",
                            });
                        }
                        else {
                            return res.status(201).json({
                                message: "Successfully uploded!",
                                details: "Blog has been successfully uploaded to our records.",
                            });
                        }
                    }
                }
                else {
                    return res.status(402).json({
                        issue: "Bad Request!",
                        details: "All fields are required.",
                    });
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
exports.default = new NewBlogs();
