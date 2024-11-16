interface Environment {
  allProjectsApiUrl: string;
  allReviewsApiUrl: string;
  postReviewApiUrl: string;
  getResumeApiUrl: string;
  sendEmailApiUrl: string;
  getAllBlogsApiUrl:string;
  getSingleBlogApiUrl:string;
}

const environment: Environment = {
  allProjectsApiUrl: process.env.NEXT_PUBLIC_GET_PROJECT_API_URL as string,
  allReviewsApiUrl: process.env.NEXT_PUBLIC_GET_REVIEWS_API_URL as string,
  postReviewApiUrl: process.env.NEXT_PUBLIC_POST_REVIEWS_API_URL as string,
  getResumeApiUrl: process.env.NEXT_PUBLIC_GET_RESUME_API_URL as string,
  sendEmailApiUrl: process.env.NEXT_PUBLIC_POST_EMAIL_API_URL as string,
  getAllBlogsApiUrl: process.env.NEXT_PUBLIC_GET_ALL_BLOGS_API_URL as string,
  getSingleBlogApiUrl: process.env.NEXT_PUBLIC_GET_SINGLE_BLOG_API_URL as string
};

const envConfig = Object.freeze(environment);

export default envConfig;
