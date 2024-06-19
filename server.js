/* 
Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : Main Server.
 Date : 20.06.2024 
 */

const envConfig = require('./src/config/envConfig');
const connectDb = require('./src/config/databaseConnection');
const app = require('./src/app.js');

// DataBase Calling


const startServer = async() => {
    const appConfig = {
        port: envConfig.port,
        hostName: envConfig.host,
      };

    await connectDb();
    app.listen(appConfig.port, () => {
        console.log(`server is running on ${appConfig.hostName}${appConfig.port}`);
      });
}
startServer();


