import SignOut from "./SignOut";
import React from "react";

const Header = (props) => {
    return (
        <header>
            <h1>⚛️🔥💬</h1>
            <SignOut auth={props.auth}/>
        </header>
    )
}

export default Header
