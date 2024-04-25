import React from 'react';
import "./Chat.css"
const Chat = () => {
    return (
        <div className={"chatBody"}>
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Chat;