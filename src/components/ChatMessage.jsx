import React from "react";

const ChatMessage = (props) => {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === props.auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://sun9-61.userapi.com/impg/uAIvVvVCy-xFggD2Cr2d0VzOhiK9eEvJBvoUTg/NcZ-wSrYzps.jpg?size=773x616&quality=95&sign=c2ae6ba09ef8fc698a1cbe73c3e51c3b&type=album'} />
            <p>{text}</p>
        </div>
    </>)
}

export default ChatMessage
