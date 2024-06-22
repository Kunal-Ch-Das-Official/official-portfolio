/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the delete single user reviews.
 Date : 22.06.2024 
 */

const reviewModel = require("../../models/reviewModel");

const deleteReviewHandler = async (req, res) => {
  try {
    const deleteReview = await reviewModel.findByIdAndDelete(req.params.id);
    if (!deleteReview) {
      res.status(500).json({message: "Unable to delete due to some techical error!!"});
    } else {
      res.status(200).json({message: "Review successfully deleted!"});
    }
  } catch (error) {
    res.status(404).json({message: "Requesed resources are not found!"})
  }
};

module.exports = deleteReviewHandler;
