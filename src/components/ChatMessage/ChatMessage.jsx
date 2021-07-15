import React from "react";
import styles from './ChatMessage.module.css'
import noAvatar from '../../assets/no-avatar.png'

const ChatMessage = (props) => {
    const { text, uid, photoURL } = props.message;

    return (
        <div className={`${styles.message} ${uid === props.auth.currentUser.uid ? styles.sent : styles.received}`}>
            <img src={photoURL || noAvatar} />
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
