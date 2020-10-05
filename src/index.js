import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, createStore , Middleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducer/rootReducer";
import thunk from 'redux-thunk';

const store = createStore(rootReducer , applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
serviceWorker.unregister();
