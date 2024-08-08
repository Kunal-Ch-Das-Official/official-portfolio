import axios from "axios";
import envConfig from "../../envConfig";

const getResume = async (id) => {
  if(id){
    try {
      const resumeWithId = await axios.get(`${envConfig.getResumeApiUrl}/${id}`);
      return resumeWithId;
    } catch (error) {
      return (console.log("Internal Server Error", error));
    }
  }else{
  try {
    const resume = await axios.get(envConfig.getResumeApiUrl);
    return resume;
  } catch (error) {
    return (console.log("Internal Server Error", error));
  }
}
};

export default getResume;
