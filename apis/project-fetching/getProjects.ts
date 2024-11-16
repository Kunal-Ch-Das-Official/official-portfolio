import envConfig from "@/envConfig";
import axios, { AxiosRequestConfig } from "axios";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  next?: {
    revalidate: number;
  };
}

const config: CustomAxiosRequestConfig = {
  method: "GET",
  url: envConfig.allProjectsApiUrl,
  // Custom property
  next: {
    revalidate: 5,
  },

  // other AxiosRequestConfig properties...
};

const getProjectData = async () => {
  try {
    const res = await axios(config);
    const projectData = await res.data;
    return projectData;
  } catch (error) {
    console.log(error);
    throw new Error("Sorry we are unable to fetching");
  }
};

export default getProjectData;
