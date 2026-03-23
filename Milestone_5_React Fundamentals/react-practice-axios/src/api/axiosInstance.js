import axios from "axios";

const generateRequestId = () => {
  return `req-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
};

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    Accept: "*/*",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    config.headers["X-Request-ID"] = generateRequestId();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;