import React from "react";
import ReactDOM from "react-dom";

// All CSS should be imported
import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
