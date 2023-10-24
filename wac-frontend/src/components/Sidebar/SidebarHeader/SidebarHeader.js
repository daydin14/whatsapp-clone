// Dependencies
import React from 'react'

// Components
import { Avatar } from '@mui/material';
import SidebarHeaderTools from './SidebarHeaderTools'


const SidebarHeader = () => {
    return (
        <div className='sidebar_header'>
            <Avatar src="https://avatars.githubusercontent.com/u/22377881?v=4" />
            <SidebarHeaderTools />
        </div>
    )
}

export default SidebarHeader
