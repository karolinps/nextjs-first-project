import { getToken, isTokenExpired } from "../services/auth";
import axios from "axios";

let instance = axios.create({
  baseURL: "https://api-faith.herokuapp.com/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: false, // for CORS
});
// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = getToken();
  if (isTokenExpired()) {
    removeUserSession();
    window.reload("/");
    return false;
  } else {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  }
});
export default instance;
