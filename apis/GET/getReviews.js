import axios from "axios";
import envConfig from "../../envConfig";

const getReviews = async (id) => {
  if (id) {
    try {
      const singleReview = await axios.get(
        `${envConfig.getReviewsApiUrl}/${id}`
      );
      return singleReview;
    } catch (error) {
      return console.log("Internal Server Error", error);
    }
  } else {
    try {
      const reviews = await axios.get(envConfig.getReviewsApiUrl);
      return reviews;
    } catch (error) {
      return console.log("Internal Server Error", error);
    }
  }
};

export default getReviews;
