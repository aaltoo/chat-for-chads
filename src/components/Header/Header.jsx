import SignOut from "../SignOut/SignOut";
import React from "react";
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <header>
            <h1>⚛️🔥💬</h1>
            <SignOut auth={props.auth}/>
        </header>
    )
}

export default Header
