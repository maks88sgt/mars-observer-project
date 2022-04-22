export const getApiKey = () => {
  const apiKey =
    localStorage.getItem("apiKey") ||
    process.env.REACT_APP_API_KEY ||
    "DEMO_KEY";
  console.log(process.env);
  return apiKey;
};
