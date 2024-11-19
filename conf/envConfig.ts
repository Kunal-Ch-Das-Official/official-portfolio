interface Environment {
  projectUrl: string;
}
const variable: Environment = {
  projectUrl: import.meta.env.VITE_APP_PROJECT_URL as string,
};
const envConfig = Object.freeze(variable);
export default envConfig;
