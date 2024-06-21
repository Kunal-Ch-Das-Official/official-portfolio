/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is multer config file for projects upload.
 Date : 21.06.2024 
 */


const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const random = uuidv4();
    cb(null, random + "" + file.originalname);
  },
});

// Define the file filter function
const fileFilter = (req, file, cb) => {
  // Accept only image files (jpeg, png, gif)
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/gif" || file.mimetype === "image/webp" || file.mimetype === "image/svg+xml" || file.mimetype === "image/jpg" ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, WEBP, SVG, JPG, and GIF files are allowed."), false);
  }
};

const projectsUpload = multer({ 
  storage: storage,
  fileFilter: fileFilter
});
module.exports = projectsUpload;
