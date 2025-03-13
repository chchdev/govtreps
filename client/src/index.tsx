import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Ensure this file exists, or remove the import if you don't need it.

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
