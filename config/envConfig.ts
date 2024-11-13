interface Environment {
  registerUrl: string;
  loginUrl: string;
  resetPasswordLinkurl: string;
  resetPasswordUrl: string;
  getCurrentUserUrl: string;
  projectUrl: string;
  blogArticleUrl: string;
  changePasswordUrl: string;
  feedbacksUrl: string;
  contactEnquiryUrl: string;
  contactEnquiryResponseSendingUrl: string;
  resumeManagementUrl: string;
}
const variable: Environment = {
  registerUrl: import.meta.env.VITE_APP_ADMIN_REGISTRATION_URL as string,
  loginUrl: import.meta.env.VITE_APP_ADMIN_LOGIN_URL as string,
  resetPasswordLinkurl: import.meta.env
    .VITE_APP_ADMIN_FORGOT_PASSWORD_LINK_SEND_URL as string,
  resetPasswordUrl: import.meta.env.VITE_APP_RESET_FORGOTTEN_PASSWORD as string,
  getCurrentUserUrl: import.meta.env
    .VITE_APP_GET_CURRENT_ADMIN_USER_URL as string,
  projectUrl: import.meta.env.VITE_APP_PROJECT_URL as string,
  blogArticleUrl: import.meta.env.VITE_APP_BLOG_ARTICLE_URL as string,
  changePasswordUrl: import.meta.env.VITE_APP_PASSWORD_CHANGE_URL as string,
  feedbacksUrl: import.meta.env.VITE_APP_ALL_FEEDBACKS_URL as string,
  contactEnquiryUrl: import.meta.env.VITE_APP_ALL_CONTACT_ENQUIRY_URL as string,
  contactEnquiryResponseSendingUrl: import.meta.env
    .VITE_APP_ALL_CONTACT_ENQUIRY_RESPONSE_SEND_URL as string,
  resumeManagementUrl: import.meta.env.VITE_APP_RESUME_MANAGEMENT_URL as string,
};
const envConfig = Object.freeze(variable);
export default envConfig;
