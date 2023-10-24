// Dependencies
import React from 'react'

// Styling
import './SidebarChat.css';

// Components
import { Avatar } from '@mui/material';

const SidebarChat = () => {
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div className='sidebarChat_info'>
                <h2>Room Name</h2>
                <p>Last Message Sent in the Room</p>
            </div>
        </div>
    )
}

export default SidebarChat
