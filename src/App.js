import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { getPeopleRequest } from "./redux/actions";
import Header from "./components/Header";

function App() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getPeopleRequest);
    };

    return (
        <div className="container">
            <Header />
        </div>
    );
}

export default App;
