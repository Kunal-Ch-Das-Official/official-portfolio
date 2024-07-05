const environment = {
    allProjectsApiUrl: process.env.NEXT_PUBLIC_PROJECT_API_URL,
    allReviewsApiUrl: process.env.NEXT_PUBLIC_REVIEWS_API_URL

}

const envConfig = Object.freeze(environment);

export default envConfig;