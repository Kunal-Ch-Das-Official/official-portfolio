interface Environment {
  loginUrl: string;
}
const variable: Environment = {
  loginUrl: import.meta.env.VITE_APP_ADMIN_LOGIN_URL as string,
};
const envConfig = Object.freeze(variable);
export default envConfig;
