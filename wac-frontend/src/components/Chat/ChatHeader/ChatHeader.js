// Dependencies
import React from 'react'

// Components
import ChatHeaderTools from './ChatHeaderTools'
import { Avatar } from '@mui/material'

const ChatHeader = () => {
    return (
        <div className='chat__header'>
            <Avatar />
            <div className='chat__headerInfo'>
                <h3>Room Name</h3>
                <p>Last seen at...</p>
            </div>
            <ChatHeaderTools />
        </div>
    )
}

export default ChatHeader
