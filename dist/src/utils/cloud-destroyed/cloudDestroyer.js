"use strict";
/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Custom cloud asstets remover
 * Author      : Kunal Chandra Das
 * Date        : 28.10.2024
 * Version     : 2.0.0
 * Details     : This class contains a method for removing assets from Cloudinary,
 *               a cloud storage service. The method `cloudAssets` accepts a
 *               `publicId` of the asset to be deleted and uses Cloudinary's
 *               `uploader.destroy` method to remove the asset from the cloud.
 *
 *               The method performs the following steps:
 *
 *               1. **Attempt to Delete Asset**: It attempts to destroy the asset
 *                  from Cloudinary by passing the required `publicId` to the
 *                  `uploader.destroy` method.
 *
 *               2. **Success Logging**: If the deletion is successful, it logs
 *                  a message confirming that the requested file has been removed
 *                  from Cloudinary, including the `publicId` of the deleted file.
 *
 *               3. **Error Handling**: If there is an error during the deletion
 *                  process (e.g., invalid `publicId`, connection issues), it catches
 *                  the error and logs the error message, issue details, and the
 *                  origin of the failure.
 *
 *               This method is useful for cleaning up cloud resources or removing
 *               files no longer needed in the system. It provides an easy way to
 *               interact with Cloudinary's asset management capabilities.
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
class Destroyer {
    cloudAssets(requiredPublicId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield cloudinaryConfig_1.default.uploader.destroy(requiredPublicId).then(() => {
                    console.log({
                        message: "Requested file has been removed from cloudinary!",
                        result: requiredPublicId,
                    });
                });
            }
            catch (error) {
                console.error({
                    issue: error.message,
                    details: "Unable to destroy requested resources!",
                    issueOrigin: "custom single destroyer.",
                });
            }
        });
    }
}
exports.default = Destroyer;
