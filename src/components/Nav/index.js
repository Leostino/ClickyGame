import React from "react";

function Nav(props) {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">{props.children}</li>
            <li className="nav-item">{props.children}</li>
        </ul>
    )
}



export default Nav;