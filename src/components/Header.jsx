import React from "react";
import Sort from "./Sort";
import Tab from "./Tab";

function Header(props) {
    return (
        <div className="header">
            <Sort />
            <Tab />
        </div>
    );
}

export default Header;
