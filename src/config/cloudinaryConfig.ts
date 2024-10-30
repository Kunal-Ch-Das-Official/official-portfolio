/**
 * Project Name: Kunal Chandra Das Portfolio
 * Author      : Kunal Chandra Das
 * Date        : 29/10/2024
 * Version     : 2.0.0
 * Details     : This file contains the configuration settings for Cloudinary,
 *               an assets management tool.
 */

import envConfig from "./envConfig";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: envConfig.cloudinaryCloudName,
  api_key: envConfig.cloudinaryApiKey,
  api_secret: envConfig.cloudinaryCloudSecret,
});

const cloudinaryConfig = cloudinary;
export default cloudinaryConfig;
