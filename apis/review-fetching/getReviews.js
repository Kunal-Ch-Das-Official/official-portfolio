import envConfig from '@/envConfig';
import axios from 'axios';


const getReviews = async () => {
    try {

        const res = await axios.get(envConfig.allReviewsApiUrl);
        const reviewsData = await res.data;
        return reviewsData;

    } catch (error) {
        console.log(error);
        throw new Error("Sorry we are unable to fetching");
    }


}

export default getReviews;