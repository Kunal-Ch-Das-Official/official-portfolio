import envConfig from '@/envConfig';
import axios from 'axios';


const getResume = async () => {
    try {

        const res = await axios.get(envConfig.getResumeApiUrl);
        const myResume = await res.data;
        return myResume;

    } catch (error) {
        console.log(error);
        throw new Error("Sorry we are unable to fetching");
    }


}

export default getResume;