import axios from "axios";
import ConfigureStore from "../Store/Configure_Store/ConfigureStore";

const baseUrl = "https://kilimo-backend.herokuapp.com";

const store = ConfigureStore();

const request = axios.create({
  baseURL: baseUrl,
});


const subscribe = store.subscribe(() => store.getState());

request.interceptors.request.use((request) => {
  const state = store.getState();
  const tkn = state?.User?.tkn;
  request.headers.Authorization = `Bearer ${tkn}`;
  return request;
});
export default request;
