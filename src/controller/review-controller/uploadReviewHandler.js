/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description :  This is controller of the post user reviews by client.
 Date : 22.06.2024 
 */

const reviewModel = require("../../models/reviewModel");
const uploadReviewHandler = async (req, res) => {
  try {
    const { userName, organization } = req.body;
    const existingData = await reviewModel.findOne({ $and: [{ organization: organization }, { userName: userName }] });


    if(!existingData){
      const newReview = new reviewModel({
        userName: req.body.userName,
        reviewContent: req.body.reviewContent,
        rating: req.body.rating,
        gender: req.body.gender,
        organization: req.body.organization
      });
  
      const uploadReviews = await newReview.save();
      if(!uploadReviews){
        res.status(400).json({ error: "Bad request!"});
      }else{
        res.status(200).json({ message: "Succesfully uploaded!"});
      }
    }else{
      res.status(409).json({error: 'The request could not be completed due to a conflict with the current state of the resource.'});
    }

    
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = uploadReviewHandler;
