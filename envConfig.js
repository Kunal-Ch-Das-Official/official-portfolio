
const environment = { 
authenticetedEmail: import.meta.env.VITE_APP_ADMIN_EMAIL,
authenticetedPassword: import.meta.env.VITE_APP_ADMIN_PASSWORD,
postResumeApiUrl: import.meta.env.VITE_APP_RESUME_POST_API_URL
}

const envConfig = Object.freeze(environment);
export default envConfig;