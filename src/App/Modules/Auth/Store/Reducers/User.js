// login auth reducer
import * as ActionTypes from "../ActionTypes/ActionTypes";

export const User = (
  state = {
    loading: false,
    errmess: null,
    loggedIn: false,
    newUser: [],
    tkn: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      return {
        ...state,
        errmess: null,
        loggedIn: true,
        newUser: action.payload[0],
        tkn: action.payload[1],
        loading: false,
      };

    case ActionTypes.LOADING:
      return {
        ...state,
        errmess: null,
        loggedIn: false,
        newUser: [],
        loading: true,
      };

    case ActionTypes.LOG_FAILED:
      return {
        ...state,
        errmess: action.payload,
        newUser: [],
        loggedIn: false,
        loading: false,
      };

    case ActionTypes.LOGOUT:
      return {
        ...state,
        errmess: null,
        newUser: [],
        loggedIn: false,
        loading: false,
      };

    default:
      return state;
  }
};
