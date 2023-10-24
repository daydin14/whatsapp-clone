// Dependencies
import React from 'react'

// Styling
import './Sidebar.css'

// Components
import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarSearch from './SidebarSearch/SidebarSearch';
import SidebarChat from './SidebarChats/SidebarChat';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarHeader />
            <SidebarSearch />

            <div className='sidebar__chats'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
