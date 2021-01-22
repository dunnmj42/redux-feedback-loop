import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

const feelingReducer = (state = 0, action) => {
  switch(action.type) {
    case "SET_FEELING":
      return action.payload;
    default:
      return state;
  }
}

const understandingReducer = (state = 0, action) => {
  switch(action.type) {
    case "SET_UNDERSTANDING":
      return action.payload;
    default:
      return state;
  }
}

const supportedReducer = (state = 0, action) => {
  return state;
}

const commentReducer = (state = '', action) => {
  return state;
}

const reduxStore = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportedReducer,
    commentReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
