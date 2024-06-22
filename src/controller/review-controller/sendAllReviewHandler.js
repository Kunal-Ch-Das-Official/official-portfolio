/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the send all user reviews to the client.
 Date : 22.06.2024 
 */

const reviewModel = require("../../models/reviewModel");

const sendAllReviewHandler = async (req, res) => {
  try {
    const findAllReviews = await reviewModel.find();
    if (!findAllReviews) {
      res.status(500).json({error: "Unable to get all reviews due to some techical error!"});
    } else {
      res.status(200).json(findAllReviews);
    }
    
  } catch (error) {
    res.status(404).json({error: "Requested resources are not found!", details: error.message })
  }
};

module.exports = sendAllReviewHandler;
