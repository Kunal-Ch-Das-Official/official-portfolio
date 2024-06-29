
const environment = { 
authenticetedEmail: import.meta.env.VITE_APP_ADMIN_EMAIL,
authenticetedPassword: import.meta.env.VITE_APP_ADMIN_PASSWORD,
postResumeApiUrl: import.meta.env.VITE_APP_RESUME_POST_API_URL,
getResumeApiUrl: import.meta.env.VITE_APP_GET_RESUME_API_URL,
editResumeApiUrl: import.meta.env.VITE_APP_EDIT_RESUME_API_URL,
deleteResumeApiUrl: import.meta.env.VITE_APP_DELETE_RESUME_API_URL,
postProjectApiUrl: import.meta.env.VITE_APP_POST_PROJECTS_API_URL,
getProjectApiUrl: import.meta.env.VITE_APP_GET_PROJECTS_API_URL,
editProjectApiUrl: import.meta.env.VITE_APP_EDIT_PROJECTS_API_URL,
deleteProjectApiUrl: import.meta.env.VITE_APP_DELETE_PROJECTS_API_URL,
getReviewsApiUrl: import.meta.env.VITE_APP_GET_REVIEWS_API_URL,
editReviewApiUrl: import.meta.env.VITE_APP_EDIT_REVIEW_API_URL,
deleteReviewApiUrl: import.meta.env.VITE_APP_DELETE_REVIEW_API_URL
}

const envConfig = Object.freeze(environment);
export default envConfig;