// Dependencies
import React from 'react';

// Styling
import './Login.css';

// Components
import { handleLoginWithGoogle } from '../../services/firebase';

const Login = () => {
    return (
        <div className='login'>
            <h1>Welcome to my WhatsApp-Clone</h1>
            <p>Login with Google below to continue!</p>
            <br />
            <button onClick={handleLoginWithGoogle}>Connect with Google</button>
        </div>
    )
}

export default Login;