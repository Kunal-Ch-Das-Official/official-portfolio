/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the send single user reviews to the client.
 Date : 22.06.2024 
 */

const reviewModel = require("../../models/reviewModel");

const sendSingleReviewHandler = async (req, res) => {
  try {
    const singleReview = await reviewModel.findById(req.params.id);
    if (!singleReview) {
      res.status(500).json({error: "Unable to send due to some internal error!"})
    } else {
      res.status(200).json(singleReview);
    }
  } catch (error) {
    res.status(404).json({error: "Review not found!", details: error.message })
  }
};

module.exports = sendSingleReviewHandler;
