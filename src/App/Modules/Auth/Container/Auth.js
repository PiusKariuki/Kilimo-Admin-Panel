import React from "react";
import { connect } from "react-redux";
import Kilimo from "App/Modules/Kilimo/Container/Kilimo";
import Landing from "../Views/Landing";

const Auth = ({ tkn }) => {
	return <>{tkn !=null ? <Kilimo /> : <Landing />}</>;
};
// mapstate fn
const mapStateToProps = (state) => {
	return {
		tkn: state.User.tkn,
	};
};

export default connect(mapStateToProps, null)(Auth);
