import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import StoreProvider from "./store/index.jsx";
import "normalize.css";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
