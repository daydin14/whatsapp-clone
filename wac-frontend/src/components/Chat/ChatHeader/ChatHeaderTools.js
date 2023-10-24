// Dependencies
import React from 'react'

// Components
import { IconButton } from '@mui/material'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import AttachFile from '@mui/icons-material/AttachFile'
import MoreVert from '@mui/icons-material/MoreVert'

const ChatHeaderTools = () => {
    return (
        <div className='chat__headerTools'>
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <IconButton>
                <AttachFile />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        </div>
    )
}

export default ChatHeaderTools
