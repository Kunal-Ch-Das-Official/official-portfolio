/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the post contact info.
 Date : 30.06.2024 
 */

const contactModel = require("../../models/contactModel");

const uploadContactInfoHandler = async (req, res) => {
  try {
    // const {userName, contactEmail, contactNumber, message} = req.body;
    const contactInfoData = new contactModel({
      userName: req.body.userName,
      contactEmail: req.body.contactEmail,
      contactNumber: req.body.contactNumber,
      message: req.body.message,
    });

    const submitData = await contactInfoData.save();

    if (!submitData) {
      res.status(400).json({ error: "Bad request!" });
    } else {
      res.status(200).json({ message: "Successfully submited!" });
    }
  } catch (error) {
    console.log(`Unable to post info due to ${error}`);
    res.status(500).json({ error: "Technical Error", details: error.message });
  }
};

module.exports = uploadContactInfoHandler;
