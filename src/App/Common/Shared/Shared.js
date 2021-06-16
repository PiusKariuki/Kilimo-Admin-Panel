import axios from "axios";

// request interceptor
export const interceptor = (token) => {
  axios.interceptors.request.use(function config() {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export const baseUrl = "https://votingapi.zoopio.co.ke/api/v1/";
