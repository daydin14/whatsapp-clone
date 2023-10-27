// imports
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.mjs';
import cors from 'cors';
import Pusher from 'pusher';

// app configs
const app = express();
const port = process.env.PORT || 9000;
const pusher = new Pusher({
    appId: "1695913",
    key: "bf1066bdbbcbe81fe129",
    secret: "",
    cluster: "us2",
    useTLS: true
});

// middleware
app.use(express.json());
app.use(cors());

// DB Config
const dbName = 'WhatsApp-CloneDB';
const password = '6oJPCDbP5KPLkZ5f';
const connection_url = `mongodb+srv://admin:${password}@cluster0.6ldodz3.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open', () => {
    console.log('DB is Connected');
    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log('A change occurred', change);
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            });
        } else {
            console.log('Error triggering Pusher');
        }
    });
});

// API Routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.post('/messages/new', async (req, res) => {
    try {
        const dbMessage = req.body;
        const data = await Messages.create(dbMessage);
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/messages/sync', async (req, res) => {
    try {
        const data = await Messages.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Listener
app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`);
})
