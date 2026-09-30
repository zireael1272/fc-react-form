import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import FormComponent from "./components/FormComp/FormComponent";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormComponent />
  </React.StrictMode>,
);

reportWebVitals();
