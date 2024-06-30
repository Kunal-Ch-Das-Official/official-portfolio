/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the delete contact info.
 Date : 30.06.2024 
 */

const contactModel = require("../../models/contactModel");

const deleteContactInfoHandler = async (req, res) => {
  try {
    const findAndDelete = await contactModel.findByIdAndDelete(req.params.id);
    if (!findAndDelete) {
      res.status(404).json({ error: "Not found !" });
    } else {
      res.status(200).json({ message: "Successfully deleted!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Technical error", details: error.message });
  }
};

module.exports = deleteContactInfoHandler;
