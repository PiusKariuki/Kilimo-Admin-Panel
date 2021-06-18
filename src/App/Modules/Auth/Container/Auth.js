import React from "react";
import authRoutes from "../Routes/Routes";
// react-router-dom imports
import { Switch, Route,Redirect } from "react-router-dom";
import { connect } from "react-redux";

// routing hook to avoid going back to login when authenticated
import useAuth from "../Hooks/useAuth";

const Auth = ({tkn}) => {
  // .............routing map fn.................
  const getRoutes = (routes) => {
    return(
      // ............conditional for redirecting to conatainer components...........
    routes.map((prop,key) => <Route path={(prop.path && prop.layout+ prop.path) 
      || (prop.layout)}
    component={prop.component} key={key} />)
    );
  }
  // ........end route map fn........................

  // init redirect hook
  const [redirectWithTkn]=useAuth();

  return (
    <Switch>
      {getRoutes(authRoutes)}
      redirectWithTkn(tkn);
      <Redirect from="/" to="/auth/landing" />
    </Switch>
  )
}
// mapstate fn
const mapStateToProps = (state) => {
  return{
    tkn: state.User.tkn,
  }
}

export default connect(mapStateToProps, null)(Auth);
