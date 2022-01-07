import axios from "axios";
import ConfigureStore from "../Store/Configure_Store/ConfigureStore";

const baseUrl = "https://kilimo-backend.herokuapp.com";

const store = ConfigureStore();

const request = axios.create({
  baseURL: baseUrl,
});

const state  = store.getState();
const tkn = state?.User?.tkn;

console.log(tkn);

request.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${tkn}`;
  return request;
});
export default request;
