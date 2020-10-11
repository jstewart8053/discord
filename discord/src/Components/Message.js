import React from 'react'
import "../Message.css";
import { Avatar } from '@material-ui/core';

function Message() {
    return (
        <div className='message'>
            <Avatar />
            <div className="message_info">
                <h4>jenjen
                <span className="message_timestamp">
                        timestamp
                </span>
                </h4>
                <p>this is a message </p>
            </div>
        </div>
    )
}

export default Message
