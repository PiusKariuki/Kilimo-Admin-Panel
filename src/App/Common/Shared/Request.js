import axios from "axios";

const baseUrl = "http://localhost:3000";

const request = axios.create({
  baseURL: baseUrl
});

const persistentState = localStorage.getItem("kilimo-admin");
const tkn = JSON.parse(persistentState)?.User?.tkn;
console.log(tkn);

request.interceptors.request.use(request => {
  request.headers.Authorization = `Bearer ${tkn}`
  return request;
});
export default request;




