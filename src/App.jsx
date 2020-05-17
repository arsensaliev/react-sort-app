import React, { useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getPeopleRequest } from "./redux/actions";
import Header from "./components/Header";
import People from "./components/People";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPeopleRequest());
    }, []);

    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <People />
            </div>
        </BrowserRouter>
    );
}

export default App;
