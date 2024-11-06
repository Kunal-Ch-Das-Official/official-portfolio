"use strict";
/**
 * Blog Database Model
 * Project: Kunal Chandra Das Portfolio
 * Author: Kunal Chandra Das
 * Date: 29/10/2024
 * Version: 2.0.0
 *
 * Description:
 * This model defines the schema and structure for the blog document
 * in the Kunal Chandra Das Portfolio database. It is responsible for
 * creating and managing records for blog posts, including fields
 * such as title, author, images, and content.
 *
 * Usage:
 * Use this model to interact with blog data in the database.
 * It supports operations like creating, reading, updating, and deleting
 * blog posts, and includes fields for supporting images and
 * associated code snippets.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Create the Blog schema
const BlogSchema = new mongoose_1.Schema({
    blogTitle: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        maxlength: 50,
        required: true,
    },
    supportingImgUrl: {
        type: String,
        required: true,
    },
    supportingImgPublicId: {
        type: String,
        required: true,
    },
    statementHeading: {
        type: String,
        required: true,
    },
    statement: {
        type: String,
        required: true,
    },
    corespondingCode: {
        type: String,
    },
    commandLine: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true, // Changed from 1 to true for better clarity
    },
}, { timestamps: true });
// Create the model
const blogModel = mongoose_1.default.model("Blog", BlogSchema);
exports.default = blogModel;
