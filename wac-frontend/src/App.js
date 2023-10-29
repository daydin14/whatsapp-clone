// Dependencies
import { useEffect, useState } from 'react';
import axios from './axios';
import Pusher from 'pusher-js';

// Styling
import './App.css';

// Components
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

// Services
import { auth } from './services/firebase';

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  // Syncs latest messages
  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      });
  }, []);

  // Pusher Real-Time
  useEffect(() => {
    const pusher = new Pusher('bf1066bdbbcbe81fe129', {
      cluster: 'us2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  // Firebase Auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        setUser(authUser);
      } else {
        // User is logged out
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(messages);
  return (
    <div className="app">
      {
        user ?
          <div className='app_body'>
            <Sidebar />
            <Chat messages={messages} />
          </div>
          : <Login />
      }
    </div>
  );
}

export default App;