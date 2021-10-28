import axios from "axios";

const baseUrl = "http://localhost:5000";

const request = axios.create({
  baseURL: baseUrl
});

const persistentState = localStorage.getItem("state");
const tkn = JSON.parse(persistentState)?.User?.tkn;

request.interceptors.request.use(request => {
  request.headers.Authorization = `Bearer ${tkn}`
  return request;
});
export default request;




