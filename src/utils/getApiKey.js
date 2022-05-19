export const getApiKey = () => {
  /*if (process.env.NODE_ENV === "development") {
      return process.env.REACT_APP_API_KEY || "DEMO_KEY";
    }*/

  const savedApiKey = localStorage.getItem("apiKey");
  if (savedApiKey && savedApiKey.length === 40) {
    return savedApiKey;
  } else {
    return "DEMO_KEY";
  }
};
