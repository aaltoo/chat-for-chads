import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";
import Header from "./components/Header";

firebase.initializeApp({
  apiKey: "AIzaSyABYMP3w6R--vfqc10fFMptXthBAii1IvE",
    authDomain: "superchat-9ac96.firebaseapp.com",
    projectId: "superchat-9ac96",
    storageBucket: "superchat-9ac96.appspot.com",
    messagingSenderId: "278290687821",
    appId: "1:278290687821:web:8c908a56a2f112f578f904",
    measurementId: "G-LB55BS4Y6P"
})

const auth = firebase.auth();
const analytics = firebase.analytics();
const firestore = firebase.firestore();

function App() {
    const [user] = useAuthState(auth);
    return (
        <div className="App">
            <Header auth={auth}/>
            <section>
                {user ? <ChatRoom auth={auth} firestore={firestore}/> : <SignIn auth={auth}/>}
            </section>
        </div>
    )
}

export default App;
