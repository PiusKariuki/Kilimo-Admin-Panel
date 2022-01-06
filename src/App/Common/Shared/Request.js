import axios from "axios";

const baseUrl = "https://kilimo-backend.herokuapp.com";

const request = axios.create({
  baseURL: baseUrl
});

const persistentState = localStorage.getItem("kilimo-admin");
const tkn = JSON.parse(persistentState)?.User?.tkn;

request.interceptors.request.use(request => {
  request.headers.Authorization = `Bearer ${tkn}`
  return request;
});
export default request;




