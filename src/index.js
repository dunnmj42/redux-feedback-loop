import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// MUI "dark mode" theme for Provider
const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

// TOP LEVEL REDUCERS FOR FEEDBACK DATA
const feelingReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_FEELING":
      return action.payload;
    default:
      return state;
  }
};

const understandingReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_UNDERSTANDING":
      return action.payload;
    default:
      return state;
  }
};

const supportedReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_SUPPORTED":
      return action.payload;
    default:
      return state;
  }
};

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return action.payload;
    default:
      return state;
  }
};// END TOP LEVEL REDUCERS

// combineReducers for rootReducer use
const appReducer = combineReducers({
    feelingReducer,
    understandingReducer,
    supportedReducer,
    commentReducer,
});

// rootReducer allows CLEAR all reducers
const rootReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return undefined;
    default:
      return appReducer(state, action); // Else return combined top level reducers
  }
};

// store declaration and middleware(redux-logger)
const reduxStore = createStore(
  rootReducer,
  applyMiddleware(logger)
);

// Theme provider for MUI and CSS baseline for element styling
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={reduxStore}>
      <CssBaseline/>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
