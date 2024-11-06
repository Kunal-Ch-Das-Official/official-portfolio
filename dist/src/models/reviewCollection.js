"use strict";
/*

 * Reviews Database Model
 * Project: Kunal Chandra Das Portfolio
 * Author: Kunal Chandra Das
 * Date: 29/10/2024
 * Version: 2.0.0
 *
 * Description:
 * This model defines the schema and structure for the reviews document
 * in the Kunal Chandra Das Portfolio database. It is responsible for
 * creating and managing records related to user feedback and testimonials,
 * including fields for reviewer name, rating, comments, and submission date.
 *
 * Usage:
 * Use this model to interact with reviews data in the database.
 * It supports operations like creating, reading, updating, and deleting
 * review entries, facilitating

 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const arrayLimit = (val) => {
    return val.length <= 5;
};
const reviewSchema = new mongoose_1.default.Schema({
    userName: {
        type: String,
        required: true,
    },
    organization: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    reviewContent: {
        type: String,
        required: true,
    },
    rating: {
        type: [Number],
        validate: [arrayLimit],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: Boolean,
        default: 1,
    },
});
const reviewModel = mongoose_1.default.model("Review", reviewSchema);
exports.default = reviewModel;
