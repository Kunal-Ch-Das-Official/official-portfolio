"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Custom image uploader (cloud)
 * Author      : Kunal Chandra Das
 * Date        : 28.10.2024
 * Version     : 2.0.0
 * Details     : This class handles uploading image files to Cloudinary, a cloud
 *               storage platform. It uses the `cloudinaryConfig.uploader.upload_stream`
 *               method to upload images and provides a streamlined API to store
 *               images in a specified folder on Cloudinary.
 *
 *               **Method: `uploadSingle`**
 *
 *               This method allows uploading a single image to Cloudinary by
 *               accepting a file buffer (e.g., an image file's binary data)
 *               and a folder name. It returns an object containing the stored
 *               image's access URL and public ID if the upload is successful.
 *
 *               The method works as follows:
 *
 *               1. **Create a Cloudinary Upload Stream**: The method creates an
 *                  upload stream using `cloudinaryConfig.uploader.upload_stream`
 *                  with options to store the image in a specific folder and to
 *                  treat the file as an image (`resource_type: "image"`).
 *
 *               2. **Buffer to Stream Conversion**: The image file, represented
 *                  by the `fileBuffer`, is converted into a readable stream
 *                  using the `streamifier.createReadStream()` method, and the
 *                  stream is piped to the Cloudinary upload stream.
 *
 *               3. **Handle Upload Response**: If the upload is successful,
 *                  the method resolves with an object containing:
 *                  - `storedDataAccessUrl`: The public URL for accessing the
 *                    uploaded image.
 *                  - `storedDataAccessId`: The unique public ID assigned to
 *                    the uploaded image by Cloudinary.
 *
 *               4. **Error Handling**: If any error occurs during the upload
 *                  process (e.g., network issues, invalid file format), the method
 *                  will log the error and reject the promise. If the upload response
 *                  is missing expected properties (URL or public ID), an error
 *                  will be thrown.
 *
 *               **Return Type**: The method returns a promise that resolves to
 *               an `UploadResult` object containing the file's URL and public ID,
 *               or `null` if the upload fails.
 *
 *               This class is useful for handling image uploads, providing a
 *               reliable interface for storing and retrieving images in Cloudinary.
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
const cloudinaryConfig_1 = __importDefault(require("../../config/cloudinaryConfig"));
const streamifier_1 = __importDefault(require("streamifier"));
class CloudinaryUploader {
    uploadSingle(fileBuffer, folderName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new Promise((resolve, reject) => {
                    const uploadStream = cloudinaryConfig_1.default.uploader.upload_stream({ folder: folderName, resource_type: "image" }, (error, result) => {
                        if (error) {
                            reject(error);
                        }
                        else if (result && result.secure_url && result.public_id) {
                            resolve({
                                storedDataAccessUrl: result.secure_url,
                                storedDataAccessId: result.public_id,
                            });
                        }
                        else {
                            reject(new Error("Upload result is undefined or missing properties."));
                        }
                    });
                    // Create a readable stream from the buffer
                    streamifier_1.default.createReadStream(fileBuffer).pipe(uploadStream);
                });
            }
            catch (error) {
                console.error({
                    status: 500,
                    issue: "Cloudinary uploader error!",
                    issueOrigin: "CloudinaryUploader.uploadSingle",
                    message: error.message,
                });
                return null;
            }
        });
    }
}
exports.default = CloudinaryUploader;
