import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Landing from "./App/Modules/Auth/Views/Landing";

import "assets/css/material-dashboard-react.css?v=1.10.0";

// store import
import { Provider } from "react-redux";
import ConfigureStore from "./App/Common/Store/Configure_Store/ConfigureStore";

const store = ConfigureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
