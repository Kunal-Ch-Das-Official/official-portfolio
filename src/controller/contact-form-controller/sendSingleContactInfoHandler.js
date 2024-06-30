/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the send single contact info.
 Date : 30.06.2024 
 */

const contactModel = require("../../models/contactModel");

const sendSingleContactInfoHandler = async (req, res) => {
  try {
    const findSingleContactInfo = await contactModel.findById(req.params.id);
    if (!findSingleContactInfo) {
      res.status(404).json({ error: "Not found!" });
    } else {
      res.status(200).json(findSingleContactInfo);
    }
  } catch (error) {
    res.status(500).json({ error: "Technical error", details: error.message });
  }
};

module.exports = sendSingleContactInfoHandler;
