
const environment = { 
authenticetedEmail: import.meta.env.VITE_APP_ADMIN_EMAIL,
authenticetedPassword: import.meta.env.VITE_APP_ADMIN_PASSWORD,
postResumeApiUrl: import.meta.env.VITE_APP_RESUME_POST_API_URL,
getResumeApiUrl: import.meta.env.VITE_APP_GET_RESUME_API_URL,
editResumeApiUrl: import.meta.env.VITE_APP_EDIT_RESUME_API_URL,
deleteResumeApiUrl: import.meta.env.VITE_APP_DELETE_RESUME_API_URL
}

const envConfig = Object.freeze(environment);
export default envConfig;