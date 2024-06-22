/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the edit single user reviews .
 Date : 22.06.2024 
 */

const reviewModel = require("../../models/reviewModel");

const editReviewHandler = async (req, res) => {
  try {
    const { userName, reviewContent } = req.body;
    const existingData = await reviewModel.findOne({ $and: [{ reviewContent: reviewContent }, { userName: userName }] });
   if (!existingData) {
    const updateReviewsBody = await reviewModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true}
    );
    if (!updateReviewsBody) {
      return res.status(500).json({ error: "Unable to update due to some techical error!!" });
    } else {
      res.status(200).json({ message: "Succesfully updated!"});
    }
   } else {
      res.status(409).json({error: "The request could not be completed due to a conflict with the current state of the resource."})
   }
   
  } catch (error) {
    res
      .status(404)
      .json({ error: "Requested resources are not found!", details: error.message });
  }
};

module.exports = editReviewHandler;
