interface Environment {
    allProjectsApiUrl: string;
    allReviewsApiUrl: string;
    postReviewApiUrl: string;
}

const environment: Environment = {
    allProjectsApiUrl: process.env.NEXT_PUBLIC_PROJECT_API_URL as string,
    allReviewsApiUrl: process.env.NEXT_PUBLIC_REVIEWS_API_URL as string,
    postReviewApiUrl: process.env.NEXT_PUBLIC_POST_REVIEWS_API_URL as string,
}

const envConfig = Object.freeze(environment);

export default envConfig;
