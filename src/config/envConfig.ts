/**
 * Project Environment Variable Setup
 * Project: Kunal Chandra Das Portfolio
 * Author: Kunal Chandra Das
 * Date: 29/10/2024
 * Version: 2.0.0
 *
 * Description:
 * This module sets up and manages environment variables for the Kunal Chandra Das Portfolio application.
 * It uses the `dotenv` package to load environment variables from a `.env` file into `process.env`,
 * ensuring that sensitive information and configuration settings are stored securely.
 *
 * Functionality:
 * - Defines an interface `EnvType` to specify the structure of the environment configuration.
 * - Initializes an `environment` object that retrieves configuration values from environment variables:
 *   - `port`: The port on which the application will run (defaults to 3000 if not specified).
 *   - `databaseConnectionString`: The connection string for the database (required for database connectivity).
 *   - `cloudinaryCloudName`: The Cloudinary cloud name for media storage.
 *   - `cloudinaryApiKey`: The API key for authenticating with Cloudinary.
 *   - `cloudinaryApiSecret`: The API secret for Cloudinary.
 * - Freezes the `environment` object to prevent modifications.
 *
 * Usage:
 * Import this module to access the `envConfig` object containing the application’s configuration settings.
 * Ensure that a `.env` file is present in the root directory with the necessary environment variables defined.
 */

import "dotenv/config";

interface EnvType {
  port: number;
  databaseConnectionString: string;
  cloudinaryCloudName: string;
  cloudinaryApiKey: string;
  cloudinaryCloudSecret: string;
  jwtSecretKey: string;
  emailHostProtocol: string;
  emailPort: any;
  emailHostUser: string;
  emailHostPassword: string;
}

const environment: EnvType = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  databaseConnectionString: process.env.DB_CONNECTION_STRING || "",
  cloudinaryCloudName: process.env.CLOUD_NAME || "",
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || "",
  cloudinaryCloudSecret: process.env.CLOUDINARY_API_SECRET || "",
  jwtSecretKey: process.env.JWT_SECRET_KEY || "",

  emailHostProtocol: process.env.EMAIL_HOST_PROTOCOL || "",
  emailPort: process.env.EMAIL_PORT,
  emailHostUser: process.env.EMAIL_HOST_USER || "",
  emailHostPassword: process.env.EMAIL_HOST_PASSWORD || "",
};

const envConfig = Object.freeze(environment);
export default envConfig;
