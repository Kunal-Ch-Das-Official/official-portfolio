"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio Backend
 * Author      : Kunal Chandra Das
 * Date        : 29/10/2024
 * Version     : 2.0.0
 * Details     : This file configures the Cloudinary service for managing
 *               assets (e.g., images, videos) by setting up the necessary
 *               credentials (API key, secret, cloud name) from environment
 *               variables. It initializes and exports the Cloudinary instance
 *               for use in the project.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envConfig_1 = __importDefault(require("./envConfig"));
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: envConfig_1.default.cloudinaryCloudName,
    api_key: envConfig_1.default.cloudinaryApiKey,
    api_secret: envConfig_1.default.cloudinaryCloudSecret,
});
const cloudinaryConfig = cloudinary_1.v2;
exports.default = cloudinaryConfig;
