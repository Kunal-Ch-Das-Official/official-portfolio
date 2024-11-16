import envConfig from "@/envConfig";
import axios from "axios";

const singleBlogFetching = async (id: string) => {
  const getSingleBlogUrl = `${envConfig.getSingleBlogApiUrl}/${id}`;
  try {
    const apiResponse = await axios.get(getSingleBlogUrl)
    return apiResponse.data;

  } catch (error) {
    console.log(error);
    throw new Error("Sorry we are unable to fetching");
  }
};

export default singleBlogFetching;
