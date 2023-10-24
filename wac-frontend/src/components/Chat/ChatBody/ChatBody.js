// Dependencies
import React from 'react'

const ChatBody = () => {
    return (
        <div className='chat__body'>
            <p className='chat__message'>
                <span className='chat__name'>David</span>
                This is a Message
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>
            </p>
            <p className='chat__message chat__receiver'>
                <span className='chat__name'>David</span>
                This is a Message
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>
            </p>
        </div>
    )
}

export default ChatBody
