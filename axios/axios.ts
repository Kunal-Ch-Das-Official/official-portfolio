import axios from "axios";
import envConfig from "../conf/envConfig";

export default axios.create({
  baseURL: envConfig.serverBaseUrl,
});
