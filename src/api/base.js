import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

// Set the default headers for all requests
api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Access-Control-Allow-Origin"] =
  "http://localhost:8080";

export default api;
