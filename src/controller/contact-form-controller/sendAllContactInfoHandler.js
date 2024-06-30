/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the send all contact info.
 Date : 30.06.2024 
 */

const contactModel = require("../../models/contactModel");

const sendAllContactInfoHandler = async (req, res) => {
  try {
    const findAllContactData = await contactModel.find();
    if (!findAllContactData) {
      res.status(404).json({ error: "Not found!" });
    } else {
      res.status(200).json(findAllContactData);
    }
  } catch (error) {
    res.status(500).json({ error: "Technical error", details: error.message });
  }
};

module.exports = sendAllContactInfoHandler;
