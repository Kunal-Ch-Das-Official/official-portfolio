interface Environment {
  allProjectsApiUrl: string;
  allReviewsApiUrl: string;
  postReviewApiUrl: string;
  getResumeApiUrl: string;
  sendEmailApiUrl: string;
}

const environment: Environment = {
  allProjectsApiUrl: process.env.NEXT_PUBLIC_PROJECT_API_URL as string,
  allReviewsApiUrl: process.env.NEXT_PUBLIC_REVIEWS_API_URL as string,
  postReviewApiUrl: process.env.NEXT_PUBLIC_POST_REVIEWS_API_URL as string,
  getResumeApiUrl: process.env.NEXT_PUBLIC_GET_RESUME_API_URL as string,
  sendEmailApiUrl: process.env.NEXT_PUBLIC_POST_EMAIL_API_URL as string,
};

const envConfig = Object.freeze(environment);

export default envConfig;
