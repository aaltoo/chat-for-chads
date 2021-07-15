import firebase from "firebase";
import styles from './SignIn.module.css'

const SignIn = (props) => {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        props.auth.signInWithPopup(provider);
    }

    return (
        <>
            <button className={styles.signIn} onClick={signInWithGoogle}>Sign in with Google</button>
            <p>Do not violate the community guidelines or you will be banned for life!</p>
        </>
    )
}

export default SignIn
