import axios from "axios";
import envConfig from "../../envConfig";


const getBlogs = async () => {
  try {
    const blogs = await axios.get(envConfig.getAllBlogApiUrl);
    return blogs;
  } catch (error) {
    return (console.log("Internal Server Error", error));
  }
};

export default getBlogs;