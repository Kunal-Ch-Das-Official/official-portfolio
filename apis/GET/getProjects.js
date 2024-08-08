import axios from "axios";
import envConfig from "../../envConfig";

const getProjects = async (id) => {
  if (id) {
    try {
      const singleProject = await axios.get(
        `${envConfig.getProjectApiUrl}/${id}`
      );
      return singleProject;
    } catch (error) {
      return console.log("Internal Server Error", error);
    }
  } else {
    try {
      const projects = await axios.get(envConfig.getProjectApiUrl);
      return projects;
    } catch (error) {
      return console.log("Internal Server Error", error);
    }
  }
};

export default getProjects;
