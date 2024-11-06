"use strict";
/**
 * Resume Database Model
 * Project: Kunal Chandra Das Portfolio
 * Author: Kunal Chandra Das
 * Date: 29/10/2024
 * Version: 2.0.0
 *
 * Description:
 * This model defines the schema and structure for the resume document
 * in the Kunal Chandra Das Portfolio database. It is responsible for
 * creating and managing records related to the user's professional
 * experience, education, skills, and certifications.
 *
 * Usage:
 * Use this model to interact with resume data in the database.
 * It supports operations like creating, reading, updating, and deleting
 * resume entries, enabling effective management of career information
 * and showcasing qualifications to potential employers.
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
const ResumeSchema = new mongoose_1.Schema({
    resumeUrl: {
        type: String,
        required: true,
    },
    resumePublicId: {
        type: String,
        require: true,
    },
    status: {
        type: Boolean,
        default: 1,
    },
}, { timestamps: true });
const resumeModel = mongoose_1.default.model("resume", ResumeSchema);
exports.default = resumeModel;
