"use strict";
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
const multer_1 = __importStar(require("multer"));
// Configure memory storage
const storage = multer_1.default.memoryStorage();
// Define file filter for specific file types (e.g., images and PDF)
const fileFilter = (req, file, cb // Use FileFilterCallback directly
) => {
    const validMimeTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "image/svg+xml",
        "application/pdf",
    ];
    if (validMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new multer_1.MulterError("LIMIT_UNEXPECTED_FILE", "Invalid file type. Only JPEG, PNG, GIF, WEBP, SVG, and PDF files are allowed."));
    }
};
// Create multer instance with memory storage and file filter
const multerUploader = (0, multer_1.default)({
    storage,
    fileFilter,
});
// Export the multer uploader
exports.default = multerUploader;
