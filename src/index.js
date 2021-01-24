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

const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

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
};

const rootReducer = combineReducers({
    feelingReducer,
    understandingReducer,
    supportedReducer,
    commentReducer,
});

const reduxStore = createStore(
  rootReducer,
  applyMiddleware(logger)
);

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
