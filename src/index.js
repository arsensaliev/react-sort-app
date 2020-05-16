import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createAppStore from "./redux/store";
import { Provider } from "react-redux";

const store = createAppStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
