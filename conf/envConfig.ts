interface Environment {
  serverBaseUrl: string;
  projectUrl: string;
  resumeUrl: string;
  contactFormUrl: string;
  feedbacksUrl: string;
  blogArticleUrl: string;
}
const variable: Environment = {
  serverBaseUrl: import.meta.env.VITE_APP_SERVER_BASE_URL as string,
  projectUrl: import.meta.env.VITE_APP_PROJECT_URL as string,
  resumeUrl: import.meta.env.VITE_APP_RESUME_URL as string,
  contactFormUrl: import.meta.env.VITE_APP_CONTACT_FORM_URL as string,
  feedbacksUrl: import.meta.env.VITE_APP_FEEDBACKS_URL as string,
  blogArticleUrl: import.meta.env.VITE_APP_BLOG_ARTICLE_URL as string,
};
const envConfig = Object.freeze(variable);
export default envConfig;
