interface Environment {
  registerUrl: string;
  loginUrl: string;
  resetPasswordLinkurl: string;
  resetPasswordUrl: string;
  getCurrentUserUrl: string;
}
const variable: Environment = {
  registerUrl: import.meta.env.VITE_APP_ADMIN_REGISTRATION_URL as string,
  loginUrl: import.meta.env.VITE_APP_ADMIN_LOGIN_URL as string,
  resetPasswordLinkurl: import.meta.env
    .VITE_APP_ADMIN_FORGOT_PASSWORD_LINK_SEND_URL as string,
  resetPasswordUrl: import.meta.env.VITE_APP_RESET_FORGOTTEN_PASSWORD as string,
  getCurrentUserUrl: import.meta.env
    .VITE_APP_GET_CURRENT_ADMIN_USER_URL as string,
};
const envConfig = Object.freeze(variable);
export default envConfig;
