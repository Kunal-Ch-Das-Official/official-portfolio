/* 
Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : Main Server.
 Date : 20.06.2024 
 */

const envConfig = require("./src/config/envConfig.js");
const connectDb = require("./src/config/databaseConnection.js");
const app = require("./src/app.js");

// DataBase Calling

const startServer = async () => {
  const appConfig = {
    port: envConfig.port,
  };

  await connectDb();
  app.listen(appConfig.port || 5000, () => {
    console.log(`server is running on port: ${appConfig.port}`);
  });
};
startServer();
