"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Review Router
 * Author      : Kunal Chandra Das
 * Date        : 05.11.2024
 * Version     : 2.0.0
 * Details     : This file contains the routes for managing client reviews.
 *               The router defines the HTTP endpoints for posting, retrieving,
 *               and deleting reviews submitted by clients.
 *
 *               1. **GET /reviews/client**: Retrieves a list of all reviews
 *                  posted by clients.
 *
 *               2. **POST /reviews/client**: Allows clients to submit a new
 *                  review.
 *
 *               3. **DELETE /reviews/client/:id**: Deletes a specific review
 *                  by its ID (requires authentication).
 *
 *               The router ensures proper handling of review data, including
 *               validation, and authorization checks where necessary.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadReview_1 = __importDefault(require("../../controllers/reviews/uploadReview"));
const deleteReview_1 = __importDefault(require("../../controllers/reviews/deleteReview"));
const getReviews_1 = __importDefault(require("../../controllers/reviews/getReviews"));
const authValidator_1 = __importDefault(require("../../middlewares/auth-validator/authValidator"));
const reviewsRouter = (0, express_1.Router)();
reviewsRouter.post("/client", uploadReview_1.default.uploadCtrl);
reviewsRouter.delete("/client/:id", authValidator_1.default.validate, deleteReview_1.default.deleteCtrl);
reviewsRouter.get("/client", getReviews_1.default.getCtrl);
exports.default = reviewsRouter;
