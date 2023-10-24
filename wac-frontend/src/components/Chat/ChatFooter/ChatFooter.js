// Dependencies
import React from 'react'

// Components
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import MicIcon from '@mui/icons-material/Mic'

const ChatFooter = () => {
    return (
        <div className='chat__footer'>
            <InsertEmoticonIcon />
            <form>
                <input placeholder='Type a message' type='text' />
                <button type='submit'>
                    Send a message
                </button>
            </form>
            <MicIcon />
        </div>
    )
}

export default ChatFooter
