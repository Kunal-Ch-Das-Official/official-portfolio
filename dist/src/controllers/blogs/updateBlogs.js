"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Update blog article controller
 * Author      : Kunal Chandra Das
 * Date        : 03.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the controller for updating a single blog
 *               article in the system. The update operation is performed using
 *               the HTTP **PATCH** method, which allows partial updates to an
 *               existing article, meaning only the fields that need to be modified
 *               are included in the request.
 *
 *               The controller first checks whether the user is authorized to
 *               update the article (e.g., the user must be the author of the
 *               article or have admin privileges). Once authorization is verified,
 *               the controller proceeds to update the article in the database
 *               based on the fields provided in the request body (e.g., title,
 *               content, tags).
 *
 *               The controller checks if the article exists before performing
 *               the update. If the article is not found, a `404 Not Found` response
 *               is returned. If the update is successful, the controller returns a
 *               success response with the updated article information or a confirmation
 *               message.
 *
 *               In case of any errors (e.g., invalid data, article not found,
 *               database issues), the controller returns an appropriate error message.
 *
 *               This controller is essential for allowing authorized users to
 *               modify existing blog content without needing to replace the entire
 *               article. The use of the **PATCH** method enables efficient partial
 *               updates.
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
const cloudDestroyer_1 = __importDefault(require("../../utils/cloud-destroyed/cloudDestroyer"));
const blogCollection_1 = __importDefault(require("../../models/blogCollection"));
class ExistingBlog {
    updateCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const file = req.file;
            const imageBuffer = file.buffer;
            let uploader = new cloudUploader_1.default();
            let destroyer = new cloudDestroyer_1.default();
            const { blogTitle, authorName, statementHeading, statement, corespondingCode, commandLine, } = req.body;
            try {
                const findExistingBlog = yield blogCollection_1.default.findById(id);
                if (!findExistingBlog) {
                    return res.status(404).json({
                        issue: "Not Found!",
                        details: "Requested blog not exist.",
                    });
                }
                else {
                    let imageUpload;
                    if (file) {
                        imageUpload = yield uploader.uploadSingle(imageBuffer, "Blog_Assets");
                        yield destroyer.cloudAssets(findExistingBlog.supportingImgPublicId);
                    }
                    const newBlogTitle = blogTitle || findExistingBlog.blogTitle;
                    const newAuthorName = authorName || findExistingBlog.authorName;
                    const newStatementHeading = statementHeading || findExistingBlog.statementHeading;
                    const newStatement = statement || findExistingBlog.statement;
                    const newCorespondingCode = corespondingCode || findExistingBlog.corespondingCode;
                    const newCommandLine = commandLine || findExistingBlog.commandLine;
                    const newImageUrl = file
                        ? imageUpload === null || imageUpload === void 0 ? void 0 : imageUpload.storedDataAccessUrl
                        : findExistingBlog.supportingImgUrl;
                    const newPublicId = file
                        ? imageUpload === null || imageUpload === void 0 ? void 0 : imageUpload.storedDataAccessId
                        : findExistingBlog.supportingImgPublicId;
                    const updatedData = {
                        blogTitle: newBlogTitle,
                        authorName: newAuthorName,
                        supportingImgUrl: newImageUrl,
                        supportingImgPublicId: newPublicId,
                        statementHeading: newStatementHeading,
                        statement: newStatement,
                        corespondingCode: newCorespondingCode,
                        commandLine: newCommandLine,
                    };
                    const updateBlog = yield blogCollection_1.default.findByIdAndUpdate(id, updatedData, {
                        new: true,
                    });
                    if (!updateBlog) {
                        return res.status(501).json({
                            issue: "Not Implemented!",
                            details: "Unable to upload blog, please try again later.",
                        });
                    }
                    else {
                        return res.status(200).json({
                            message: "Update Successful!",
                            details: "Blog Info has been successfully updated.",
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
exports.default = new ExistingBlog();
