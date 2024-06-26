
const environment = { 
authenticetedEmail: import.meta.env.VITE_APP_ADMIN_EMAIL,
authenticetedPassword: import.meta.env.VITE_APP_ADMIN_PASSWORD
}

const envConfig = Object.freeze(environment);
export default envConfig;