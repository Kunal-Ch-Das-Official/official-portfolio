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

    statementHeading: {
      type: String,
      required: true,
    },
    statement: {
      type: String,
      required: true,
    },
    corespondingCode: {
      type: String,
    },
    commandLine: {
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
