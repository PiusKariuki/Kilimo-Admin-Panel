import Axios from "axios";
import { baseUrl } from "../../../../Common/Shared/Shared";
import { interceptor } from "../../../../Common/Shared/Shared";
// import swal from "sweetalert";
// import getState to grab tkn
import { getState } from "../../../../Common/Store/Configure_Store/ConfigureStore";

//actiontypes imports
import * as ActionTypes from "../ActionTypes/ActionTypes";

const axios = Axios.create({
  baseURL: baseUrl,
});

const tkn = getState().tkn;
// request interceptor
interceptor(tkn);

// login thunk. Takes in email and password
export const Login = (email, password) => (dispatch, getState) => {
  const userInfo = { "email": email, "password": password };
  return axios
    .post("authentication/voters/login", userInfo)
    .then((res) => {
      dispatch(loggedIn(res.config.data, res.data.access_token));
    })
    .catch((err) => {
      if (err.response?.data?.errors)
        dispatch(logFailed(err.response?.data?.errors));
    });
};

export const loggedIn = (newUser, tkn) => ({
  type: ActionTypes.LOGGED_IN,
  payload: [newUser, tkn],
});

export const logFailed = (errors) => ({
  type: ActionTypes.LOG_FAILED,
  payload: errors,
});
