import Axios from "axios";
import { baseUrl } from "../../../../Common/Shared/Shared";
import swal from "sweetalert";

//actiontypes imports
import * as ActionTypes from "../ActionTypes/ActionTypes";

const axios = Axios.create({
  baseURL: baseUrl,
});

/*...........initialize custom hook...........*/



/*...............start login thunk...........*/
export const Login = (email, password) => (dispatch) => {
  // dispatch loading to activate useSpinner
  dispatch(loading(true))
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
/* ..................end login thunk.............................*/

/*.......................start register thunk...................*/
export const RegisterThunk = email => dispatch => {

  // dispatch loading to activate useSpinner
  dispatch(loading(true))

  const newVoter = {
    "email": email
  }

  return axios.post('authentication/voters/register', newVoter)
    .then(res => {
      swal("Registration successful", "Your password has been sent to your email", "success")
      dispatch(emailSent(res.config.data))
    })
    .catch(err => {
      if (err.response?.data?.errors)
        dispatch(emailFailed(err.response?.data?.errors));
    });
}

export const emailSent = (data) => ({
  type: ActionTypes.EMAIL_SENT,
  payload: data
});

export const emailFailed = (errmess) => ({
  type: ActionTypes.EMAIL_FAILED,
  payload: errmess
});
/* ..................end register thunk .......................*/

/*............................loading action..............*/
export const loading = () => ({
  type: ActionTypes.LOADING,
})