// Content: Project environment setup.
// Author: Kunal Chandra Das.
// Date: 20/06/2024
require("dotenv").config();

const environment = {
  port: process.env.PORT,
  databaseConnectionString: process.env.DATA_BASE_CONNECTION_STRING,
};

const envConfig = Object.freeze(environment);
module.exports = envConfig;
