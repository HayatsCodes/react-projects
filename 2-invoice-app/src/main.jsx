import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App.jsx";
import "./index.css";
import clientsReducer from "./reducers/clientsReducer.js";
import isNewClientReducer from "./reducers/isNewClientReducer.js";
import itemsReducer from "./reducers/itemsReducer.js";

const store = configureStore({
  reducer: {
    clients: clientsReducer,
    isClickedNewClient: isNewClientReducer,
    items: itemsReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
