"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Post review by clients
 * Author      : Kunal Chandra Das
 * Date        : 30.10.2024
 * Version     : 2.0.0
 * Details     : This controller handles posting a review by a client.
 *
 *               The controller validates the incoming review data, including
 *               fields such as rating, feedback, and client information. If
 *               any required fields are missing or invalid, a `400 Bad Request`
 *               response is returned.
 *
 *               Once validated, the review is stored in the database. A `201 Created`
 *               response is returned, including the newly created review's details.
 *
 *               In case of any errors during the process (e.g., database failures),
 *               a `500 Internal Server Error` response is returned.
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
const reviewCollection_1 = __importDefault(require("../../models/reviewCollection"));
class NewReviews {
    uploadCtrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, organization, gender, reviewContent, rating } = req.body;
            let ratings;
            try {
                if (userName && organization && gender && reviewContent && rating) {
                    if (!Array.isArray(rating)) {
                        ratings = [rating];
                    }
                    const newReviews = new reviewCollection_1.default({
                        userName,
                        organization,
                        gender,
                        reviewContent,
                        rating,
                    });
                    const saveData = yield newReviews.save();
                    if (!saveData) {
                        return res.status(501).json({
                            issue: "Not Implemented!",
                            details: "Requested data not been saved, please try again later.",
                        });
                    }
                    else {
                        return res.status(201).json({
                            message: "Thanks for your valuable review!",
                            details: "Requested data has been saved successfully.",
                        });
                    }
                }
                else {
                    return res.status(402).json({
                        issue: "Bad request!",
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
exports.default = new NewReviews();
