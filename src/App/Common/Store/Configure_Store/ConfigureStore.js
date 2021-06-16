import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// reducer imports
import { User } from "../../../Modules/Auth/Store/Reducers/User";

// local storage import with bearer  token and user info
import { saveState, loadState } from "../LocalStorage/LocalStorage";

const persistedState = loadState();

// define our middleware ie thunkk and logger
const middleware = [thunk, logger];

const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      User: User,
    }),
    persistedState,
    applyMiddleware(...middleware)
  );

  // subscribe to state changes to store our user info, tkn and other non-changing data
  store.subscribe(() => {
    // save token and user info on state Changes
    saveState(store.getState());
  });
  return store;
};

export const getState = () => {
  return ConfigureStore().getState();
};

export default ConfigureStore;
