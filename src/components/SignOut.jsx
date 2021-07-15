import React from "react";

const SignOut = (props) => {
    return props.auth.currentUser && (
        <button className="sign-out" onClick={() => props.auth.signOut()}>Sign Out</button>
    )
}

export default SignOut
