import cloudinaryConfig from "../../config/cloudinaryConfig";

class Destroyer {
  public async cloudAssets(requiredPublicId: string): Promise<void> {
    try {
      await cloudinaryConfig.uploader.destroy(requiredPublicId).then(() => {
        console.log({
          message: "Requested file has been removed from cloudinary!",
          messageOrigin: "custom single destroyer.",
        });
      });
    } catch (error: any) {
      console.error({
        issue: error.message,
        details: "Unable to destroy requested resources!",
        issueOrigin: "custom single destroyer.",
      });
    }
  }
}

export default Destroyer;
