import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { CartContextWrapper } from "./cart-context/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContextWrapper>
);
