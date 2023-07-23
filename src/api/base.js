import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_APP_SERVER_URL,
});

// Set the default headers for all requests
api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Access-Control-Allow-Origin"] =
  process.env.BACKEND_APP_SERVER_URL;

export default api;
