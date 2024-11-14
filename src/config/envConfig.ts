/**
 * Project Environment Variable Setup
 * Project: Kunal Chandra Das Portfolio
 * Author: Kunal Chandra Das
 * Date: 29/10/2024
 * Version: 2.0.0
 *
 * Description:
 * This module loads and manages environment variables for the Kunal Chandra Das Portfolio application.
 * It uses the `dotenv` package to load variables from a `.env` file into `process.env` at runtime,
 * ensuring that sensitive information and configuration settings are not hardcoded into the application.
 *
 * Functionality:
 * - Defines an interface `EnvType` to specify the structure and types of the environment variables.
 * - Initializes an `environment` object that retrieves configuration values from environment variables:
 *   - `port`: The port on which the application will run (defaults to 3000 if not specified).
 *   - `databaseConnectionString`: The connection string for the database (must be defined in the `.env` file).
 *   - `cloudinaryCloudName`: The Cloudinary cloud name for media storage (must be defined in the `.env` file).
 *   - `cloudinaryApiKey`: The API key for authenticating with Cloudinary (must be defined in the `.env` file).
 *   - `cloudinaryApiSecret`: The API secret for Cloudinary (must be defined in the `.env` file).
 *   - `jwtSecretKey`: The secret key used for JWT authentication (must be defined in the `.env` file).
 *   - `emailHostProtocol`: The email host protocol (must be defined in the `.env` file).
 *   - `emailPort`: The email host port (must be defined in the `.env` file).
 *   - `emailHostUser`: The email host user for authentication (must be defined in the `.env` file).
 *   - `emailHostPassword`: The email host password for authentication (must be defined in the `.env` file).
 *   - `clientSideUrl`: The URL of the client-side application (must be defined in the `.env` file).
 * - If any environment variable is not set, fallback/default values are used (e.g., `port` defaults to `3000`).
 * - Freezes the `environment` object to ensure its values cannot be modified at runtime, securing the configuration.
 *
 * Usage:
 * - Import this module to access the `envConfig` object, which contains the application’s configuration settings.
 * - Ensure that a `.env` file is present in the root directory of the project with the necessary environment variables defined.
 *   **Never commit the `.env` file to source control**, as it contains sensitive information like database credentials and API keys.
 */

import "dotenv/config";
interface EnvType {
  // 1. Dependency env
  port: number;
  databaseConnectionString: string;
  cloudinaryCloudName: string;
  cloudinaryApiKey: string;
  cloudinaryCloudSecret: string;
  jwtSecretKey: string;

  // 2. Email env
  emailHostProtocol: string;
  emailPort: any;
  emailHostUser: string;
  emailHostPassword: string;
  clientSideUrl: string;

  // 3. Super admin env
  // superAdminOne: string;
  // superAdminTwo: string;
  // superAdminThree: string;
  // superAdminFour: string;
  // 4. CORS origin env
  // originOne: string;
  // originTwo: string;
  // originThree: string;
  // originFour: string;
  // originFive: string;
}

const environment: EnvType = {
  // 1. Dependency ENV
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  databaseConnectionString: process.env.DB_CONNECTION_STRING || "",
  cloudinaryCloudName: process.env.CLOUD_NAME || "",
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || "",
  cloudinaryCloudSecret: process.env.CLOUDINARY_API_SECRET || "",
  jwtSecretKey: process.env.JWT_SECRET_KEY || "",
  // 2. Email ENV
  emailHostProtocol: process.env.EMAIL_HOST_PROTOCOL || "",
  emailPort: process.env.EMAIL_PORT,
  emailHostUser: process.env.EMAIL_HOST_USER || "",
  emailHostPassword: process.env.EMAIL_HOST_PASSWORD || "",
  clientSideUrl: process.env.CLIENT_FACING_URL || "",
  // 3. Super admin ENV
  // superAdminOne: process.env.SUPER_ADMIN_ONE || "",
  // superAdminTwo: process.env.SUPER_ADMIN_TWO || "",
  // superAdminThree: process.env.SUPER_ADMIN_THREE || "",
  // superAdminFour: process.env.SUPER_ADMIN_FOUR || "",
  // 4. CORS origin ENV
  // originOne: process.env.ORIGIN_ONE || "",
  // originTwo: process.env.ORIGIN_TWO || "",
  // originThree: process.env.ORIGIN_THREE || "",
  // originFour: process.env.ORIGIN_FOUR || "",
  // originFive: process.env.ORIGIN_FIVE || "",
};

const envConfig = Object.freeze(environment);
export default envConfig;
