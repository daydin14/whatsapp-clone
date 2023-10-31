// Dependencies
import React, { useState } from 'react'

// Components
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import MicIcon from '@mui/icons-material/Mic'
import axios from '../../../axios';

const ChatFooter = () => {

    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new', {
            message: input,
            name: "Dev Guy",
            timestampe: "Now!",
            received: false,
        });

        setInput('');
    }

    return (
        <div className='chat__footer'>
            <InsertEmoticonIcon />
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder='Type a message'
                    type='text' />
                <button type='submit' onClick={sendMessage}>
                    Send a message
                </button>
            </form>
            <MicIcon />
        </div>
    )
}

export default ChatFooter
