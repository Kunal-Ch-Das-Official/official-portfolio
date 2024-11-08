interface Environment {
  registerUrl: string;
  loginUrl: string;
  resetPasswordLinkurl: string;
}
const variable: Environment = {
  registerUrl: import.meta.env.VITE_APP_ADMIN_REGISTRATION_URL as string,
  loginUrl: import.meta.env.VITE_APP_ADMIN_LOGIN_URL as string,
  resetPasswordLinkurl: import.meta.env
    .VITE_APP_ADMIN_FORGOT_PASSWORD_LINK_SEND_URL as string,
};
const envConfig = Object.freeze(variable);
export default envConfig;
