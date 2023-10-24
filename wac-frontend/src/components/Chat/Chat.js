// Dependencies
import React from 'react'

// Styling
import './Chat.css'

// Components
import ChatHeader from './ChatHeader/ChatHeader'
import ChatBody from './ChatBody/ChatBody'
import ChatFooter from './ChatFooter/ChatFooter'

const Chat = () => {
    return (
        <div className='chat'>
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
    )
}

export default Chat
