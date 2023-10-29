// Dependencies
import React from 'react'

// Components
import { IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import { handleGoogleLogout } from '../../../services/firebase';

const SidebarHeaderTools = () => {
    return (
        <div className='sidebar_tools'>
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            <IconButton className='logout' onClick={handleGoogleLogout} title="Logout">
                <LogoutIcon />
            </IconButton>
        </div>
    )
}

export default SidebarHeaderTools
