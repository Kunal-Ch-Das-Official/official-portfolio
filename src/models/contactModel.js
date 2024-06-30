/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : this is the contact form model to send message to me by client.
 Date : 30.06.2024 
 */

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ContactSchema = new Schema(
  {
    userName: {
      type: String,
      length: 30,
      required: true,
    },
    contactEmail: {
      type: String,
      length: 50,
      required: true,
    },
    contactNumber: {
      type: Number,
      length: 10,
      required: true,
    },
    message: {
      type: String,
      length: 1500,
      required: true,
    },
    status: {
      type: Boolean,
      default: 1,
    },
  },
  { timestamps: true }
);

const contactModel = mongoose.model("ContactInfo", ContactSchema);
module.exports = contactModel;
