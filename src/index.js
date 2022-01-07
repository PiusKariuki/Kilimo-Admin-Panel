import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "assets/css/material-dashboard-react.css?v=1.10.0";

// store import
import { Provider } from "react-redux";
import ConfigureStore from "./App/Common/Store/Configure_Store/ConfigureStore";
import Auth from "App/Modules/Auth/Container/Auth";

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
