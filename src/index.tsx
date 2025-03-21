import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import {store} from "./redux/store";
// import App from "./App";
import "./index.css";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store} children={undefined}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
