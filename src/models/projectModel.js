/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : Project Schema.
 Date : 20.06.2024 
 */


const mongoose = require("mongoose");
const { Schema } = mongoose;

const arrayLimit = (val) => {
  return val.length <= 15;
}

const ProjectSchema = new Schema(
  {
    projectName: {
      type: String,
      maxlength: 50, // Enforce max length for projectName
      required: [true, 'Project name is required'],
    },
    author: {
      type: String,
      maxlength: 20, // Enforce max length for author
      required: [true, 'Author name is required'],
    },
    description: {
      type: String,
      maxlength: 1000, // Enforce max length for description
      required: [true, 'Project description is required'],
    },
    projectThumbnail: {
      type: String,
      required: [true, 'Project thumbnail is required'],
    },
    projectThumbnailPublicId: {
      type: String,
      required: [true, 'Project thumbnail public ID is required'],
    },
    firstView: {
      type: String,
      required: [true, 'First view image is required'],
    },
    firstViewPublicId: {
      type: String,
      required: [true, 'First view public ID is required'],
    },
    secondView: {
      type: String,
      required: [true, 'Second view image is required'],
    },
    secondViewPublicId: {
      type: String,
      required: [true, 'Second view public ID is required'],
    },
    thirdView: {
      type: String,
      required: [true, 'Third view image is required'],
    },
    thirdViewPublicId: {
      type: String,
      required: [true, 'Third view public ID is required'],
    },
    projectUrl: {
      type: String,
      required: [true, 'Project URL is required'],
    },
    githubLink: {
      type: String,
      required: [true, 'GitHub link is required'],
    },
    technologyUsed: {
      type: [String],
      validate: {
        validator: arrayLimit,
        message: 'Technology list exceeds the limit of 15'
      },
      required: [true, 'Technology used is required'],
    },
    status: {
      type: Boolean,
      default: true, // Set default as boolean
    },
  },
  { timestamps: true }
);

const projectModel = mongoose.model("Project", ProjectSchema);

module.exports = projectModel;
