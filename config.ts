const ENV = {
  API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL,
};

const getEnvVars = () => {
  return ENV;
};

export default getEnvVars;
