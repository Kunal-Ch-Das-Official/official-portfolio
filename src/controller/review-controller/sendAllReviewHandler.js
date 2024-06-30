/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the get all user reviews to the client or admin.
 Date : 22.06.2024 
 */

const reviewModel = require("../../models/reviewModel");

const sendAllReviewHandler = async (req, res) => {
  try {
    const findAllReviews = await reviewModel.find();
    if (!findAllReviews) {
      res.status(404).json({error: "Not found!"});
    } else {
      res.status(200).json(findAllReviews);
    }
    
  } catch (error) {
    res.status(500).json({error: "Technical error", details: error.message })
  }
};

module.exports = sendAllReviewHandler;
