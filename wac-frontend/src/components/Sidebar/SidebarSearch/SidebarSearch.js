// Dependencies
import React from 'react'

// Components
import SearchOutlined from '@mui/icons-material/SearchOutlined';
const SidebarSearch = () => {
    return (
        <div className='sidebar_search'>
            <div className='sidebar_searchContainer'>
                <SearchOutlined />
                <input placeholder='Search or start a new chat' type="text" />
            </div>
        </div>
    )
}

export default SidebarSearch
