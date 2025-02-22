import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { Provider } from "react-redux";
import productDataReducer from './reducers/productDataReducer'
const store = createStore(productDataReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);