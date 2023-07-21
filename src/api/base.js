import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_URL,
});

// Set the default headers for all requests
api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Access-Control-Allow-Origin"] = process.env.REACT_APP_HOST_URL;

export default api;
