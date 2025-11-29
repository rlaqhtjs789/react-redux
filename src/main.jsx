import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.js";
import { Provider } from "react-redux";
import { loggerMIddleware } from "./middleware/index.js";
import { thunk } from "redux-thunk";

const root = createRoot(document.getElementById("root"));

const middleware = applyMiddleware(thunk, loggerMIddleware);

const store = createStore(rootReducer, middleware);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
