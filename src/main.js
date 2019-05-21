import React from 'react'
import ReactDOM from "react-dom";

import App from "./components/app";

const app = document.getElementById("app");
if (app) {
  ReactDOM.render(<App />, app);
}
