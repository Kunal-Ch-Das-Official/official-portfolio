"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Blog Router
 * Author      : Kunal Chandra Das
 * Date        : 03.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the routes for handling blog articles
 *               in the system. The router defines the HTTP endpoints for
 *               CRUD operations on blog articles.
 *
 *               1. **GET /articles**: Retrieves a list of all blog articles.
 *
 *               2. **GET /articles/:id**: Retrieves a specific blog article
 *                  by its unique ID.
 *
 *               3. **POST /articles**: Allows the creation of a new blog article.
 *                  It also handles file uploads (e.g., image) using `multer`.
 *
 *               4. **PATCH /articles/:id**: Allows partial updates to an
 *                  existing blog article, including updating the article image.
 *
 *               5. **DELETE /articles/:id**: Deletes a specific blog article
 *                  by its ID.
 *
 *               The router uses appropriate middleware for validation,
 *               authentication, and authorization, ensuring that only
 *               authorized users can create, update, or delete articles.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadBlogs_1 = __importDefault(require("../../controllers/blogs/uploadBlogs"));
const multerUploader_1 = __importDefault(require("../../middlewares/muter/multerUploader"));
const authValidator_1 = __importDefault(require("../../middlewares/auth-validator/authValidator"));
const updateBlogs_1 = __importDefault(require("../../controllers/blogs/updateBlogs"));
const deleteBlogs_1 = __importDefault(require("../../controllers/blogs/deleteBlogs"));
const getBlogs_1 = __importDefault(require("../../controllers/blogs/getBlogs"));
const blogRouter = (0, express_1.Router)();
blogRouter.post("/content", authValidator_1.default.validate, multerUploader_1.default.single("supportingImgUrl"), uploadBlogs_1.default.uploadCtrl);
blogRouter.patch("/content/:id", authValidator_1.default.validate, multerUploader_1.default.single("supportingImgUrl"), updateBlogs_1.default.updateCtrl);
blogRouter.delete("/content/:id", authValidator_1.default.validate, deleteBlogs_1.default.deleteCtrl);
blogRouter.get("/content/:id", getBlogs_1.default.getCtrl);
blogRouter.get("/content", getBlogs_1.default.getCtrl);
exports.default = blogRouter;
