/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is cloudinary config file.
 Date : 22.06.2024 
 */

require("dotenv").config();
const cloudinary = require("cloudinary").v2;

let cloudName = process.env.CLOUD_NAME;
let apiKey = process.env.API_KEY;
let apiSecret = process.env.API_SECRET;
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

const cloudConfig = cloudinary;
module.exports = cloudConfig;
