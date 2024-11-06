"use strict";
/**
 * Portfolio Projects Database Model
 * Project: Kunal Chandra Das Portfolio
 * Author: Kunal Chandra Das
 * Date: 29/10/2024
 * Version: 2.0.0
 *
 * Description:
 * This model defines the schema and structure for the portfolio projects document
 * in the Kunal Chandra Das Portfolio database. It is responsible for creating
 * and managing records of projects, including fields for project title,
 * description, technologies used, and links to live demos or repositories.
 *
 * Usage:
 * Use this model to interact with portfolio project data in the database.
 * It supports operations like creating, reading, updating, and deleting
 * project records, allowing users to showcase their work effectively and
 * provide detailed information about each project.
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
const arrayLimit = (val) => {
    return val.length <= 15;
};
const ProjectSchema = new mongoose_1.Schema({
    projectName: {
        type: String,
        maxlength: 150,
        required: [true, "Project name is required"],
    },
    author: {
        type: String,
        maxlength: 70,
        required: [true, "Author name is required"],
    },
    projectType: {
        type: String,
        required: [true, "Project Type is required"],
    },
    owner: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Project description is required"],
    },
    projectLogoUrl: {
        type: String,
        required: [true, "Project thumbnail is required"],
    },
    projectLogoPublicId: {
        type: String,
        required: [true, "Project thumbnail public ID is required"],
    },
    firstPageImageUrl: {
        type: String,
        required: [true, "First view image is required"],
    },
    firstPageImagePublicId: {
        type: String,
        required: [true, "First view public ID is required"],
    },
    secondPageImageUrl: {
        type: String,
        required: [true, "Second view image is required"],
    },
    secondPageImagePublicId: {
        type: String,
        required: [true, "Second view public ID is required"],
    },
    thirdPageImageUrl: {
        type: String,
        required: [true, "Third view image is required"],
    },
    thirdPageImagePublicId: {
        type: String,
        required: [true, "Third view public ID is required"],
    },
    liveProjectUrl: {
        type: String,
        required: [true, "Project URL is required"],
    },
    githubRepoUrl: {
        type: String,
        required: [true, "GitHub link is required"],
    },
    technologyUsed: {
        type: [String],
        validate: {
            validator: arrayLimit,
            message: "Technology list exceeds the limit of 25",
        },
        required: [true, "Technology used is required"],
    },
    status: {
        type: Boolean,
        default: true, // Set default as boolean
    },
}, { timestamps: true });
const projectModel = mongoose_1.default.model("Project-Work", ProjectSchema);
exports.default = projectModel;
