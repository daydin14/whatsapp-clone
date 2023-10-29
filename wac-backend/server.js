// Imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Pusher from 'pusher';

// Controllers
import dbMessagesController from './controllers/dbMessagesController.mjs';

// App Configs
const app = express();
const port = process.env.PORT || 9000;
const pusher = new Pusher({
    appId: "1695913",
    key: "bf1066bdbbcbe81fe129",
    secret: "",
    cluster: "us2",
    useTLS: true
});

// Middleware
app.use(express.json());
app.use(cors());

// Controller Middleware
app.use(dbMessagesController);

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
    console.log('DB is Open');
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

db
    .on("connected", () => console.log("Connected to MongoDB"))
    .on("close", () => console.log("Disconnected from MongoDB"))
    .on("error", (error) => console.log(`Error with MongoDB: ${error}`));

// API Routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

// Listener
app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`);
})
