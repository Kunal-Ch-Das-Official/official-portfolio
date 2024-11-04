import cloudinaryConfig from "../../config/cloudinaryConfig";
import streamifier from "streamifier";

interface UploadResult {
  storedDataAccessUrl: string;
  storedDataAccessId: string;
}

class CloudinaryUploader {
  public async uploadSingle(
    fileBuffer: Buffer,
    folderName: string
  ): Promise<UploadResult | null> {
    try {
      return new Promise<UploadResult>((resolve, reject) => {
        const uploadStream = cloudinaryConfig.uploader.upload_stream(
          { folder: folderName, resource_type: "image" },
          (error: any, result: any) => {
            if (error) {
              reject(error);
            } else if (result && result.secure_url && result.public_id) {
              resolve({
                storedDataAccessUrl: result.secure_url,
                storedDataAccessId: result.public_id,
              });
            } else {
              reject(
                new Error("Upload result is undefined or missing properties.")
              );
            }
          }
        );

        // Create a readable stream from the buffer
        streamifier.createReadStream(fileBuffer).pipe(uploadStream);
      });
    } catch (error) {
      console.error({
        status: 500,
        issue: "Cloudinary uploader error!",
        issueOrigin: "CloudinaryUploader.uploadSingle",
        message: (error as Error).message,
      });
      return null;
    }
  }
}

export default CloudinaryUploader;
