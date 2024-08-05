/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : this is the blogs model.
 Date : 29.07.2024 
 */

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const BlogSchema = new Schema(
  {
    blogTitle: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      length: 20,
      required: true,
    },

    supportingImg: {
      type: String,
      required: true,
    },
    supportingImgPublicId: {
      type: String,
      required: true,
    },

    statementHeadingOne: {
      type: String,
      required: true,
    },
    statementOne: {
      type: String,
      required: true,
    },
    corespondingCodeOne: {
      type: String,
    },
    commandLineOne: {
      type: String,
    },

    statementHeadingTwo: {
      type: String,
    },
    statementTwo: {
      type: String,
    },
    corespondingCodeTwo: {
      type: String,
    },
    commandLineTwo: {
      type: String,
    },

    statementHeadingThree: {
      type: String,
    },
    statementThree: {
      type: String,
    },
    corespondingCodeThree: {
      type: String,
    },
    commandLineThree: {
      type: String,
    },

    statementHeadingFour: {
      type: String,
    },
    statementFour: {
      type: String,
    },
    corespondingCodeFour: {
      type: String,
    },
    commandLineFour: {
      type: String,
    },

    status: {
      type: Boolean,
      default: 1,
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", BlogSchema);
module.exports = blogModel;
