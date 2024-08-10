import axios from "axios";
import envConfig from "../../envConfig";

const getSingleBlog = async (id) => {
  try {
    const singleBlog = await axios.get(
      `${envConfig.getSingleBlogApiUrl}/${id}`
    );
    return singleBlog;
  } catch (error) {
    return console.log("Internal Server Error", error);
  }
};

export default getSingleBlog;
