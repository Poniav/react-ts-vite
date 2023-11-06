export const Env = {
  API_URL: import.meta.env.VITE_APP_API_URL
    ? import.meta.env.VITE_APP_API_URL
    : "http://localhost:8085",
  APP_NAME: import.meta.env.APP_NAME ? import.meta.env.APP_NAME : "Blackstock",
};
