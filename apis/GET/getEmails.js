import axios from "axios";
import envConfig from "../../envConfig";

const getEmails = async (id) => {
  if (id) {
    try {
      const singleEmail = await axios.get(
        `${envConfig.getAllEmailsApiUrl}/${id}`
      );
      return singleEmail;
    } catch (error) {
      return console.log(`internal server error ${error}`);
    }
  } else {
    try {
      const emails = await axios.get(envConfig.getAllEmailsApiUrl);
      return emails;
    } catch (error) {
      return console.log(`internal server error ${error}`);
    }
  }
};

export default getEmails;
