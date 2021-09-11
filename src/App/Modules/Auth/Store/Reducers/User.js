// login auth reducer
import * as ActionTypes from "../ActionTypes/ActionTypes";

export const User = (
	state = {
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
