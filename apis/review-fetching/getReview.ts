import envConfig from '@/envConfig';
import axios from 'axios';


const getReview = async () => {
    try {

        const res = await axios.get(envConfig.allReviewsApiUrl);
        const reviewData = await res.data;
        return reviewData;

    } catch (error) {
        console.log(error);
        throw new Error("Sorry we are unable to fetching");
    }


}

export default getReview;