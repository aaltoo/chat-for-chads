import React from "react";
import './SignOut.module.css'

const SignOut = (props) => {
    return props.auth.currentUser && <button onClick={() => props.auth.signOut()}>Sign Out</button>
}

export default SignOut
