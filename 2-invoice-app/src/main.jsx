import React from "react";
import ReactDOM from "react-dom/client";
import clientsReducer from "./reducers/clientsReducer.js";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App.jsx";
import "./index.css";

const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
