import React, { useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { getPeopleRequest } from "./redux/actions";
import Header from "./components/Header";
import People from "./components/People";
function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPeopleRequest());
    }, []);

    return (
        <div className="container">
            <Header />
            <People />
        </div>
    );
}

export default App;
