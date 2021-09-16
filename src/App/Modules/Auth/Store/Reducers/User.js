// login auth reducer
import * as ActionTypes from "../ActionTypes/ActionTypes";

export const User = (
  state = {
    email: null,
    tkn: null,
    errmess: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      return {
        ...state,
        errmess: null,
        tkn: action.payload,
        loading: false,
        email: action.email,
      };

    case ActionTypes.LOG_FAILED:
      return {
        ...state,
        errmess: action.payload,
        loading: false,
      };

    case ActionTypes.LOGOUT:
      return {
        ...state,
        errmess: null,
        tkn: null,
        loading: false,
        email: null,
      };

    case ActionTypes.LOADING:
      return {
        ...state,
        errmess: null,
        loading: true,
      };

    default:
      return state;
  }
};
